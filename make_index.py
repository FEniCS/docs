import os

from markdown import markdown


def system(command):
    assert os.system(command) == 0


_path = os.path.dirname(os.path.realpath(__file__))
web_path = os.path.join(_path, "_web")

if os.path.isdir(web_path):
    system(f"rm -r {web_path}")
system(f"git clone http://github.com/FEniCS/web {web_path}")

with open(os.path.join(web_path, "template.md"), "w") as f:
    f.write("---\n")
    f.write("title: \"FEniCSx Documentation\"\n")
    f.write("---\n")
    f.write("\n")
    f.write("!!CONTENT!!\n")

system(f"cd {web_path} && bundle install && bundle exec jekyll build")

with open(os.path.join(web_path, "_site/template.html")) as f:
    template = f.read()

template = template.replace("<p>!!", "!!")
template = template.replace("!!</p>", "!!")
template = template.replace("=\"/", "=\"https://fenicsproject.org/")
template = template.replace("(/assets", "(https://fenicsproject.org/assets")

with open("README.md") as f:
    readme = f.read()

with open("index.html", "w") as f:
    f.write(template.replace("!!CONTENT!!", markdown(readme)))
