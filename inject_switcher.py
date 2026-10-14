"""Add the version switcher script to every HTML page of the site.

Inserts one marked line before the last ``</body>`` of each page and changes
nothing else, so every URL and every page's content stay as published.
Pages without ``</body>`` (template fragments) are left untouched. Running
it twice is a no-op.

With ``--verify ORIGINAL``, instead checks that the site differs from
ORIGINAL only by the injected lines and the switcher's own new files.
"""

import argparse
import filecmp
import os
import sys

MARKER = b"<!-- fenics-version-switcher -->"
TAG = MARKER + b'<script src="/_fenics/version-switcher.js" defer></script>\n'
PROJECTS = ["dolfinx", "basix", "ffcx", "ufl"]
NEW_FILES = {"versions.json", "_fenics/version-switcher.js"} | {
    f"{p}/versions.json" for p in PROJECTS
}


def html_files(root):
    """Yield the HTML pages of the projects, relative to root."""
    for project in PROJECTS:
        for dirpath, _, filenames in os.walk(os.path.join(root, project)):
            for name in filenames:
                if name.endswith(".html"):
                    yield os.path.relpath(os.path.join(dirpath, name), root)


def inject(content):
    """Return the page with the switcher tag, or None if not applicable."""
    if MARKER in content:
        return None
    i = content.lower().rfind(b"</body>")
    if i == -1:
        return None
    return content[:i] + TAG + content[i:]


def all_files(root):
    """Return all file paths below root, relative to root."""
    out = set()
    for dirpath, _, filenames in os.walk(root):
        for name in filenames:
            out.add(os.path.relpath(os.path.join(dirpath, name), root))
    return out


def verify(site, original):
    """Return a list of differences that are not the injected switcher."""
    errors = []
    site_files = all_files(site) - NEW_FILES
    original_files = set()
    for project in PROJECTS:
        if os.path.isdir(os.path.join(original, project)):
            original_files |= {
                os.path.join(project, p) for p in all_files(os.path.join(original, project))
            }
    for path in sorted(original_files - site_files):
        errors.append(f"missing: {path}")
    for path in sorted(site_files):
        a = os.path.join(site, path)
        b = os.path.join(original, path)
        if not os.path.isfile(b):
            errors.append(f"unexpected new file: {path}")
        elif path.endswith(".html"):
            with open(a, "rb") as f:
                content = f.read()
            with open(b, "rb") as f:
                expected = f.read()
            if content.replace(TAG, b"", 1) != expected:
                errors.append(f"changed beyond the injected tag: {path}")
        elif not filecmp.cmp(a, b, shallow=False):
            errors.append(f"changed: {path}")
    return errors


if __name__ == "__main__":
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("site", help="Site root, e.g. _html")
    parser.add_argument("--verify", metavar="ORIGINAL", help="Compare against this tree")
    args = parser.parse_args()

    if args.verify:
        errors = verify(args.site, args.verify)
        print("\n".join(errors[:50]))
        print(f"{len(errors)} unexpected differences")
        sys.exit(1 if errors else 0)

    injected = skipped = 0
    for path in html_files(args.site):
        full = os.path.join(args.site, path)
        with open(full, "rb") as f:
            content = inject(f.read())
        if content is None:
            skipped += 1
            continue
        with open(full, "wb") as f:
            f.write(content)
        injected += 1
    print(f"Injected {injected} pages, skipped {skipped}")
