import os


def html_files(folder):
    out = []
    for file in os.listdir(folder):
        if file.startswith("."):
            continue
        file_path = f"{folder}/{file}"
        if os.path.isdir(file_path):
            out += html_files(file_path)
        elif file.endswith(".html"):
            out.append(file_path)
    return out


for library, latest in zip(
    ["ufl", "basix", "ffcx", "dolfinx"],
    ["2025.2.0.post0", "v0.10.0", "v0.10.0", "v0.10.0.post0"],
):
    for folder in os.listdir(library):
        if folder != latest and folder != "main":
            folder_path = f"{library}/{folder}"
            if os.path.isdir(folder_path):
                for file in html_files(f"{library}/{folder}"):
                    with open(file) as f:
                        content = f.read()

                    if "<!-- Outdated warning -->" in content:
                        pre, post = content.split("<!-- Outdated warning -->")
                        _, post = content.split("<!-- End outdated warning -->")
                    else:
                        pre, post = content.split("<body")
                        body_tags, post = post.split(">", 1)
                        pre = f"{pre}<body{body_tags}>"
                        assert content == f"{pre}{post}"

                    if os.path.isfile(file.replace(folder, latest)):
                        latest_link = file.replace(folder, latest)
                    else:
                        file_parts = file.split("/")
                        latest_link = f"{folder}/{latest}/{file_parts[2]}"

                    with open(file, "w") as f:
                        f.write(pre)
                        f.write("<!-- Outdated warning -->\n")
                        f.write(
                            "<div style='width:800px;margin:auto;padding:20px;background-color:white'>"
                        )
                        f.write(
                            "<b>Note: this is documentation for an old release. "
                            "View the latest documentation at "
                            f"<a href='/{latest_link}'>docs.fenicsproject.org/{latest_link}</a>"
                            "</b>"
                        )
                        f.write("</div>")
                        f.write("\n<!-- End outdated warning -->")
                        f.write(post)
