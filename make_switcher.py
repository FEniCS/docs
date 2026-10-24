"""Generate version switcher lists and latest-release redirects.

For each documentation set this writes a pydata-sphinx-theme version
switcher JSON file listing the published versions, and redirect pages
so that e.g. https://docs.fenicsproject.org/dolfinx/ always opens the
latest release.
"""

import json
import os

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
