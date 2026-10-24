"""Generate version switcher lists and latest-release redirects.

For each documentation set this writes a pydata-sphinx-theme version
switcher JSON file listing the published versions, and redirect pages
so that e.g. https://docs.fenicsproject.org/dolfinx/ always opens the
latest release. Releases built with pydata-sphinx-theme before the
switcher was configured are patched to show it.

Usage: python3 make_switcher.py <site>, where <site> is the folder being
deployed. Only files below <site> are written.
"""

import json
import os
import re
import sys

from packaging.version import InvalidVersion, Version

url_base = "https://docs.fenicsproject.org"

# (library, documentation subfolder, switcher file). An empty subfolder
# means the documentation is at the root of each version folder. The
# first entry for each library is the target of the library redirect.
doc_sets = [
    ("dolfinx", "python", "switcher-python.json"),
    ("dolfinx", "cpp", "switcher-cpp.json"),
    ("basix", "python", "switcher-python.json"),
    ("basix", "cpp", None),
    ("ffcx", "", "switcher.json"),
    ("ufl", "", "switcher.json"),
]

# Version switcher markup, as rendered by pydata-sphinx-theme
switcher_html = """<div class="navbar-item">
<div class="version-switcher__container dropdown pst-js-only">
  <button id="pst-version-switcher-button-{n}" type="button"
    class="version-switcher__button btn btn-sm dropdown-toggle"
    data-bs-toggle="dropdown" aria-haspopup="listbox"
    aria-controls="pst-version-switcher-list-{n}" aria-label="Version switcher list">
    Choose version <span class="caret"></span>
  </button>
  <div id="pst-version-switcher-list-{n}"
    class="version-switcher__menu dropdown-menu list-group-flush py-0"
    role="listbox" aria-labelledby="pst-version-switcher-button-{n}">
  </div>
</div></div>
"""


def releases(library):
    """Published releases, newest first, keeping only the newest .postN of each."""
    newest = {}
    for folder in os.listdir(library):
        try:
            v = Version(folder)
        except InvalidVersion:
            continue
        key = (v.release, v.pre)
        if key not in newest or v > newest[key][0]:
            newest[key] = (v, folder)
    return [folder for _, folder in sorted(newest.values(), reverse=True)]


def latest(library):
    """Folder of the latest non-prerelease version."""
    return next(f for f in releases(library) if not Version(f).is_prerelease)


def redirect(path, target):
    os.makedirs(os.path.dirname(path), exist_ok=True)
    with open(path, "w") as f:
        f.write(
            "<!DOCTYPE html>\n"
            '<html><head><meta charset="utf-8">\n'
            f'<meta http-equiv="refresh" content="0; url={target}">\n'
            f'<link rel="canonical" href="{target}">\n'
            f'<title>Redirecting</title></head><body><a href="{target}">{target}</a></body></html>\n'
        )


def add_switcher(path, json_url, folder, banner):
    """Show the version switcher on a page built without it.

    Only pydata-sphinx-theme pages are changed; the theme's own script
    renders the switcher once it is configured and its markup is present.
    The version is removed from the title, as the switcher shows it.
    """
    with open(path, encoding="utf-8") as f:
        page = f.read()
    if "pydata-sphinx-theme.js" not in page or "version-switcher__container" in page:
        return
    # Older theme versions detect the stable version by comparing release
    # numbers, which fails for .postN, so the caller decides on the banner
    options = (
        "<script>"
        f"DOCUMENTATION_OPTIONS.theme_switcher_json_url = '{json_url}';"
        f"DOCUMENTATION_OPTIONS.theme_switcher_version_match = '{folder}';"
        f"DOCUMENTATION_OPTIONS.show_version_warning_banner = {str(banner).lower()};"
        "</script>\n"
    )
    page, n = re.subn(
        r"(<script>DOCUMENTATION_OPTIONS\.pagename = [^<]*</script>\n)",
        lambda m: m[1] + options,
        page,
        count=1,
    )
    if n == 0:
        return

    # Insert the switcher before the colour mode switcher (a dropdown or,
    # in older theme versions, a button), in the navbar and mobile sidebar
    count = iter(range(1, 100))
    page, n = re.subn(
        r'(<div class="navbar-item">\s*'
        r'<(?:div class="theme-switch-container|button [^>]*theme-switch-button))',
        lambda m: switcher_html.format(n=next(count)) + m[1],
        page,
    )
    if n == 0:
        return

    # The title version can differ from the folder name, e.g. 0.11.0 in
    # v0.11.0.post0
    version = r" v?\d+\.\d+(?:\.\d+)*(?:(?:a|b|rc|\.post|\.dev)\d+)*"
    page = re.sub(rf"(<title>[^<]*?){version}", r"\1", page, count=1)
    page = re.sub(rf'(logo__title">[^<]*?){version}', r"\1", page)
    with open(path, "w", encoding="utf-8") as f:
        f.write(page)


os.chdir(sys.argv[1])

redirected = set()
for library, sub, switcher in doc_sets:
    stable = latest(library)
    path = f"{sub}/" if sub else ""

    if library not in redirected:
        redirect(f"{library}/index.html", f"{url_base}/{library}/{stable}/{path}")
        redirected.add(library)
    if sub:
        redirect(f"{library}/{sub}/index.html", f"{url_base}/{library}/{stable}/{path}")

    if switcher is None:
        continue
    entries = []
    if os.path.isdir(f"{library}/main/{sub}"):
        entries.append(
            {"name": "main (dev)", "version": "main", "url": f"{url_base}/{library}/main/{path}"}
        )
    for folder in releases(library):
        if not os.path.isdir(f"{library}/{folder}/{sub}"):
            continue
        name = folder.removeprefix("v")
        entry = {"name": name, "version": folder, "url": f"{url_base}/{library}/{folder}/{path}"}
        if folder == stable:
            entry["name"] = f"{name} (stable)"
            entry["preferred"] = True
        entries.append(entry)
    with open(f"{library}/{switcher}", "w") as f:
        json.dump(entries, f, indent=2)
        f.write("\n")

    json_url = f"{url_base}/{library}/{switcher}"
    for folder in os.listdir(library):
        root = f"{library}/{folder}/{sub}"
        if folder == "main" or not os.path.isdir(root):
            continue
        for dirpath, _, filenames in os.walk(root):
            for name in filenames:
                if name.endswith(".html"):
                    add_switcher(os.path.join(dirpath, name), json_url, folder, folder != stable)
