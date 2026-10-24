"""Generate version switcher lists and latest-release redirects.

For each documentation set this writes a pydata-sphinx-theme version
switcher JSON file listing the published versions, and redirect pages
so that e.g. https://docs.fenicsproject.org/dolfinx/ always opens the
latest release. The versions are read from the versions.json files
written by make_versions.py. Releases built with pydata-sphinx-theme
before the switcher was configured are patched to show it, in place of
the switcher added by inject_switcher.py, so it must run after
inject_switcher.py.

Usage: python3 make_switcher.py <site>, where <site> is the folder being
deployed. Only files below <site> are written.
"""

import itertools
import json
import os
import re
import sys

from inject_switcher import TAG, all_files
from make_versions import BASE_URL, release

# Documentation subfolders of each library and their switcher lists (None:
# no Sphinx documentation). An empty subfolder means the documentation is
# at the root of each version folder. The library redirect opens the
# first subfolder.
doc_sets = {
    "dolfinx": {"python": "switcher-python.json", "cpp": "switcher-cpp.json"},
    "basix": {"python": "switcher-python.json", "cpp": None},
    "ffcx": {"": "switcher.json"},
    "ufl": {"": "switcher.json"},
}

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


def add_switcher(path, json_url, version, banner):
    """Show the version switcher on a page built without it.

    Only pydata-sphinx-theme pages are changed; the theme's own script
    renders the switcher once it is configured and its markup is present.
    The version is removed from the title, as the switcher shows it, and
    the switcher added by inject_switcher.py is removed.
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
        f"DOCUMENTATION_OPTIONS.theme_switcher_version_match = '{version}';"
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
    count = itertools.count(1)
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
    number = r" v?\d+\.\d+(?:\.\d+)*(?:(?:a|b|rc|\.post|\.dev)\d+)*"
    page = re.sub(rf"(<title>[^<]*?){number}", r"\1", page, count=1)
    page = re.sub(rf'(logo__title">[^<]*?){number}', r"\1", page)

    # Remove the switcher added by inject_switcher.py, which this replaces
    page = page.replace(TAG.decode(), "")
    with open(path, "w", encoding="utf-8") as f:
        f.write(page)


os.chdir(sys.argv[1])

for library, subs in doc_sets.items():
    with open(f"{library}/versions.json") as f:
        versions = json.load(f)
    stable = next(v["folder"] for v in versions if v.get("preferred"))

    for sub, switcher in subs.items():
        path = f"{sub}/" if sub else ""
        target = f"{BASE_URL}/{library}/{stable}/{path}"
        if sub == next(iter(subs)):
            redirect(f"{library}/index.html", target)
        if sub:
            redirect(f"{library}/{sub}/index.html", target)
        if switcher is None:
            continue

        # The versions with this documentation set; main has no folder key
        entries = []
        for v in versions:
            folder = v.get("folder", v["version"])
            if os.path.isdir(f"{library}/{folder}/{sub}"):
                entry = {
                    "name": v["name"].removeprefix("v"),
                    "version": v["version"],
                    "url": f"{BASE_URL}/{library}/{folder}/{path}",
                }
                if v.get("preferred"):
                    entry["preferred"] = True
                entries.append(entry)
        with open(f"{library}/{switcher}", "w") as f:
            json.dump(entries, f, indent=2)
            f.write("\n")

        json_url = f"{BASE_URL}/{library}/{switcher}"
        for folder in os.listdir(library):
            root = f"{library}/{folder}/{sub}"
            if folder == "main" or not os.path.isdir(root):
                continue
            version = release(folder)
            banner = version != release(stable)
            for page in all_files(root):
                if page.endswith(".html"):
                    add_switcher(os.path.join(root, page), json_url, version, banner)
