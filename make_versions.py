"""Write the versions.json files that drive the version switcher.

The versions of a project are the folders under ``<project>/``. Upstream CI
deploys each build to ``<project>/<branch or tag name>``, so a folder is
either ``main`` or a tag (``v0.11.0.post0``, ``2026.2.0``) with published
docs.

Writes ``<site>/<project>/versions.json`` in pydata-sphinx-theme's switcher
format, and ``<site>/versions.json`` with all projects keyed by name.
"""

import argparse
import json
import os
import re

from packaging.version import InvalidVersion, Version

PROJECTS = ["dolfinx", "basix", "ffcx", "ufl"]
BASE_URL = "https://docs.fenicsproject.org"


def parse_version(name):
    """Return the version of a tag folder, or None if it is not a tag."""
    try:
        return Version(name.removeprefix("v"))
    except InvalidVersion:
        return None


def landing_page(site, project, name):
    """Return the front page of a version folder, relative to the folder.

    Projects with Python and C++ documentation have no root index.
    """
    for sub in ("", "python/", "cpp/"):
        if os.path.isfile(os.path.join(site, project, name, sub, "index.html")):
            return sub
    return ""


def project_versions(site, project):
    """Return the switcher entries of one project, newest first."""
    path = os.path.join(site, project)
    tags = []
    has_main = False
    for name in os.listdir(path):
        if not os.path.isdir(os.path.join(path, name)):
            continue
        if name == "main":
            has_main = True
        elif (v := parse_version(name)) is not None:
            tags.append((v, name))
    tags.sort(reverse=True)

    # One entry per release: the newest .postN build, named without .postN
    newest = {}
    for v, name in tags:
        newest.setdefault((v.release, v.pre), (v, name))
    tags = sorted(newest.values(), reverse=True)

    releases = [name for v, name in tags if not v.is_prerelease]
    preferred = releases[0] if releases else None

    entries = []
    if has_main:
        entries.append(
            {
                "name": "main (dev)",
                "version": "main",
                "url": f"{BASE_URL}/{project}/main/{landing_page(site, project, 'main')}",
            }
        )
    for _, name in tags:
        release = re.sub(r"\.post\d+$", "", name)
        entry = {
            "name": release,
            "version": release,
            "folder": name,
            "url": f"{BASE_URL}/{project}/{name}/{landing_page(site, project, name)}",
        }
        if name == preferred:
            entry["name"] = f"{release} (stable)"
            entry["preferred"] = True
        entries.append(entry)
    return entries


def write_new(path, data):
    """Write JSON to a path that must not already be published."""
    if os.path.exists(path):
        raise FileExistsError(f"Refusing to overwrite existing file {path}")
    with open(path, "w") as f:
        json.dump(data, f, indent=1)
        f.write("\n")


if __name__ == "__main__":
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("site", help="Site root, e.g. _html")
    args = parser.parse_args()

    combined = {}
    for project in PROJECTS:
        if not os.path.isdir(os.path.join(args.site, project)):
            continue
        combined[project] = project_versions(args.site, project)
        write_new(os.path.join(args.site, project, "versions.json"), combined[project])
        print(f"{project}: {len(combined[project])} versions")
    write_new(os.path.join(args.site, "versions.json"), combined)
