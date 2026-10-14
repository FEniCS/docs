// Version switcher for docs.fenicsproject.org.
//
// Injected into every page by inject_switcher.py. Reads the page's
// <project>/<version>/<rest> from its URL, lists the versions in
// <project>/versions.json (written by make_versions.py) and, on selection,
// opens the same page in the chosen version, falling back to the nearest
// existing parent folder.
(function () {
  "use strict";

  // Doxygen search results and other iframes get no switcher.
  if (window.self !== window.top) return;

  // Site root, from this script's own URL, so previews served below a
  // subpath work too.
  const script = document.currentScript;
  const root = new URL("..", script.src).pathname;
  if (!location.pathname.startsWith(root)) return;
  const parts = location.pathname.slice(root.length).split("/");
  if (parts.length < 3) return;
  const project = decodeURIComponent(parts[0]);
  const current = decodeURIComponent(parts[1]);
  const rest = parts.slice(2);

  // dolfinx moved its Doxygen pages from cpp/ (v0.1-v0.3) to cpp/doxygen/
  // (v0.4 onwards, where cpp/ is Sphinx). On a Doxygen page, this is the
  // page's path relative to the Doxygen root.
  const doxygen =
    rest[0] === "cpp" &&
    document.querySelector('meta[name="generator"][content^="Doxygen"]') !== null
      ? rest.slice(rest[1] === "doxygen" ? 2 : 1).join("/")
      : null;

  // Candidate URLs in the target version, and how many leading ones are the
  // same page: the page itself (on a Doxygen page, at both Doxygen roots,
  // falling back to the Doxygen main page), then each parent folder's
  // index.html up to the version root, then the python/ and cpp/ landing
  // pages (dolfinx and newer basix versions have no root index).
  function candidates(version) {
    const base = root + project + "/" + version + "/";
    const out = [];
    let same;
    if (doxygen !== null) {
      const page = doxygen === "" || doxygen.endsWith("/") ? doxygen + "index.html" : doxygen;
      out.push(base + "cpp/doxygen/" + page, base + "cpp/" + page);
      same = out.length;
      out.push(base + "cpp/doxygen/index.html");
    } else {
      const page = rest.join("/");
      if (page !== "" && !page.endsWith("/")) out.push(base + page);
      same = out.length;
    }
    const dirs = rest.slice(0, -1);
    for (let n = dirs.length; n >= 0; n--) {
      const dir = dirs.slice(0, n).join("/");
      out.push(base + (dir ? dir + "/" : "") + "index.html");
    }
    out.push(base + "python/index.html", base + "cpp/index.html");
    return { urls: [...new Set(out)], same: same };
  }

  async function exists(url) {
    try {
      const r = await fetch(url, { method: "HEAD" });
      return r.ok;
    } catch (e) {
      return false;
    }
  }

  async function go(version) {
    const { urls, same } = candidates(version);
    for (let i = 0; i < urls.length; i++) {
      if (await exists(urls[i])) {
        const keep = i < same ? location.search + location.hash : "";
        location.href = urls[i].replace(/(^|\/)index\.html$/, "$1") + keep;
        return;
      }
    }
    location.href = root + project + "/" + version + "/";
  }

  const css = `
.fenics-vs { position: fixed; right: 1rem; bottom: 1rem; z-index: 10000;
  font: 14px/1.4 system-ui, -apple-system, "Segoe UI", Roboto, sans-serif;
  color: #fcfcfc; background: #272525; border-radius: 4px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, .35); max-width: 18rem; }
.fenics-vs summary { cursor: pointer; padding: .4rem .8rem; list-style: none;
  user-select: none; white-space: nowrap; }
.fenics-vs summary::-webkit-details-marker { display: none; }
.fenics-vs summary::after { content: " \\25BE"; }
.fenics-vs[open] summary::after { content: " \\25B4"; }
.fenics-vs summary .fenics-vs-old { color: #f0b37e; }
.fenics-vs ul { margin: 0; padding: .3rem .8rem .6rem; list-style: none;
  max-height: 50vh; overflow-y: auto; border-top: 1px solid #413d3d; }
.fenics-vs li { margin: .15rem 0; padding: 0; }
.fenics-vs a { color: #9cf; text-decoration: none; }
.fenics-vs a:hover { text-decoration: underline; }
.fenics-vs li.fenics-vs-current a { color: #fcfcfc; font-weight: 600; }
.fenics-vs-banner { position: relative; z-index: 9999; padding: .5rem 2.5rem;
  text-align: center; background: #fff3cd; color: #533f03;
  border-bottom: 1px solid #e6d28a;
  font: 14px/1.4 system-ui, -apple-system, "Segoe UI", Roboto, sans-serif; }
.fenics-vs-banner a { color: #0b5394; font-weight: 600; }
.fenics-vs-banner button { position: absolute; right: .6rem; top: .3rem;
  border: 0; background: none; color: inherit; font-size: 1.2rem;
  cursor: pointer; line-height: 1; }
@media print { .fenics-vs, .fenics-vs-banner { display: none; } }`;

  function el(tag, attrs, text) {
    const e = document.createElement(tag);
    for (const k in attrs) e.setAttribute(k, attrs[k]);
    if (text !== undefined) e.textContent = text;
    return e;
  }

  // The href (used for middle-click and copy-link) is the same page in that
  // version; a plain click resolves the nearest existing page first.
  function link(version, text) {
    const a = el("a", { href: candidates(version).urls[0] }, text);
    a.addEventListener("click", function (ev) {
      if (ev.ctrlKey || ev.metaKey || ev.shiftKey || ev.button !== 0) return;
      ev.preventDefault();
      go(version);
    });
    return a;
  }

  function banner(preferred) {
    const key = "fenics-vs-dismissed:" + project + "/" + current;
    try {
      if (sessionStorage.getItem(key)) return;
    } catch (e) {}
    const div = el("div", { class: "fenics-vs-banner", role: "note" });
    div.append(
      "You are viewing the documentation for an older release of " +
        project + " (" + current + "). The latest release is "
    );
    div.append(link(preferred.version, preferred.version));
    div.append(".");
    const close = el("button", { type: "button", "aria-label": "Dismiss" }, "×");
    close.addEventListener("click", function () {
      div.remove();
      try {
        sessionStorage.setItem(key, "1");
      } catch (e) {}
    });
    div.append(close);
    document.body.prepend(div);
  }

  function render(versions) {
    if (!versions.some((v) => v.version === current)) return;
    const preferred = versions.find((v) => v.preferred);
    const old = preferred && current !== "main" && current !== preferred.version;

    const style = el("style");
    style.textContent = css;
    document.head.append(style);

    const box = el("details", { class: "fenics-vs" });
    const summary = el("summary", { "aria-label": "Select documentation version" });
    summary.append(project + " ");
    summary.append(el("span", old ? { class: "fenics-vs-old" } : {}, current));
    box.append(summary);
    const list = el("ul");
    for (const v of versions) {
      const li = el("li", v.version === current ? { class: "fenics-vs-current" } : {});
      li.append(link(v.version, v.name));
      list.append(li);
    }
    box.append(list);
    document.body.append(box);

    if (old) banner(preferred);
  }

  fetch(root + project + "/versions.json")
    .then((r) => (r.ok ? r.json() : Promise.reject(r.status)))
    .then(render)
    .catch(() => {});
})();
