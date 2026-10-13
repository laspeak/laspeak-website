import { readdir, readFile, writeFile, copyFile } from "node:fs/promises";
import path from "node:path";

/**
 * The private preview host serves a directory under a nested opaque URL.
 * Keep the real Next/Vercel output untouched; adapt only the static `out` copy.
 * Source routes and production canonical URLs are never changed.
 */
const root = path.resolve("out");
await copyFile(path.join(root, "en/index.html"), path.join(root, "index.html"));
async function walk(dir) {
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const file = path.join(dir, entry.name);
    if (entry.isDirectory()) await walk(file);
    else if (entry.name.endsWith(".html")) {
      let html = await readFile(file, "utf8");
      const relativeRoot =
        path.relative(path.dirname(file), root).split(path.sep).join("/") ||
        ".";
      const relative = (url, navigation = false) => {
        if (!url.startsWith("/") || url.startsWith("//")) return url;
        const [pathname, hash] = url.split("#");
        const target =
          navigation && pathname.endsWith("/")
            ? `${pathname}index.html`
            : pathname;
        return `${relativeRoot}${target}${hash ? `#${hash}` : ""}`;
      };
      html = html.replace(
        /\b(href|src)="([^"]*)"/g,
        (_, attribute, value) =>
          `${attribute}="${relative(value, attribute === "href" && !value.startsWith("/_next/"))}"`,
      );
      html = html.replace(
        /\b(srcSet|srcset)="([^"]*)"/g,
        (_, attribute, value) =>
          `${attribute}="${value
            .split(",")
            .map((candidate) => {
              const [url, ...descriptor] = candidate.trim().split(/\s+/);
              return [relative(url), ...descriptor].join(" ");
            })
            .join(", ")}"`,
      );
      // Chunk registration uses the literal script attribute. The runtime base
      // must therefore match the relative attributes before any chunk executes.
      const chunkBase = `${relativeRoot}/_next/`;
      html = html.replace(
        /(<script\b[^>]*>)([\s\S]*?)(<\/script>)/g,
        (_, open, body, close) =>
          open +
          body
            .replaceAll('"/_next/', `"${chunkBase}`)
            .replaceAll('"/images/', `"${relativeRoot}/images/`) +
          close,
      );
      html = html.replace(
        "<head>",
        `<head><script>globalThis.TURBOPACK_CHUNK_BASE_PATH=${JSON.stringify(chunkBase)};</script>`,
      );
      await writeFile(file, html);
    }
  }
}
await walk(root);
console.log(
  "Private preview packaged with relative assets and native document links.",
);
