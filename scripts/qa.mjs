const { mkdir, writeFile } = await import("node:fs/promises");

/** Run inside the persistent Playwright QA session. No production dependency. */
export async function auditRoutes(
  page,
  base = "http://127.0.0.1:3000",
  outputDir = `${process.cwd()}/qa`,
) {
  await mkdir(`${outputDir}/screenshots`, {
    recursive: true,
  });
  const sitemap = await (await page.request.get(`${base}/sitemap.xml`)).text();
  const routes = [
    ...sitemap.matchAll(/<loc>https?:\/\/[^/]+([^<]+)<\/loc>/g),
  ].map((m) => m[1]);
  const results = [];
  const linkErrors = [];
  const imageErrors = [];
  const checked = new Set();
  for (const path of routes) {
    await page.setViewportSize({ width: 1440, height: 1000 });
    const response = await page.goto(base + path, { waitUntil: "networkidle" });
    const values = await page.evaluate(() => ({
      title: document.title,
      lang: document.documentElement.lang,
      h1: document.querySelectorAll("h1").length,
      description: document.querySelector('meta[name="description"]')?.content,
      canonical: document.querySelector('link[rel="canonical"]')?.href,
      alternates: [
        ...document.querySelectorAll('link[rel="alternate"][hreflang]'),
      ].map((el) => ({ lang: el.hreflang, href: el.href })),
      robots: document.querySelector('meta[name="robots"]')?.content,
      og: document.querySelector('meta[property="og:image"]')?.content,
      schema: [
        ...document.querySelectorAll('script[type="application/ld+json"]'),
      ].map((el) => JSON.parse(el.textContent)),
      links: [...document.querySelectorAll("a[href]")].map((el) =>
        el.getAttribute("href"),
      ),
      overflow: document.documentElement.scrollWidth > innerWidth,
      images: [...document.images].map((el) => ({
        src: el.currentSrc,
        loaded: el.complete && el.naturalWidth > 0,
        alt: el.alt,
      })),
    }));
    const id = path.replaceAll("/", "_").replace(/^_|_$/g, "");
    await page.screenshot({
      path: `${outputDir}/screenshots/${id}-desktop.jpg`,
      type: "jpeg",
      quality: 75,
      fullPage: true,
    });
    for (const link of values.links) {
      if (link.startsWith("#")) {
        if (!(await page.locator(`[id="${link.slice(1)}"]`).count()))
          linkErrors.push(`${path} → ${link}`);
      } else if (link.startsWith("/")) {
        const [target, hash] = link.split("#");
        if (!checked.has(link)) {
          const res = await page.request.get(base + target);
          if (!res.ok())
            linkErrors.push(`${path} → ${target}: ${res.status()}`);
          if (hash && !(await res.text()).includes(`id="${hash}"`))
            linkErrors.push(`${path} → missing ${hash}`);
          checked.add(link);
        }
      }
    }
    for (const img of values.images) {
      if (img.src && !checked.has(img.src)) {
        if (!(await page.request.get(img.src)).ok()) imageErrors.push(img.src);
        checked.add(img.src);
      }
    }
    await page.setViewportSize({ width: 375, height: 900 });
    await page.screenshot({
      path: `${outputDir}/screenshots/${id}-mobile.jpg`,
      type: "jpeg",
      quality: 75,
      fullPage: true,
    });
    const mobile = await page.evaluate(() => ({
      overflow: document.documentElement.scrollWidth > innerWidth,
      width: document.documentElement.scrollWidth,
    }));
    results.push({ path, status: response.status(), ...values, mobile });
  }
  const report = {
    count: results.length,
    uniqueTitles: new Set(results.map((r) => r.title)).size,
    uniqueDescriptions: new Set(results.map((r) => r.description)).size,
    linkErrors,
    imageErrors,
    failures: results.filter(
      (r) =>
        r.status !== 200 ||
        r.h1 !== 1 ||
        r.overflow ||
        r.mobile.overflow ||
        r.alternates.length !== 3 ||
        !r.canonical ||
        !r.og ||
        !r.description,
    ),
    pages: results,
  };
  await writeFile(
    `${outputDir}/route-results.json`,
    JSON.stringify(report, null, 2),
  );
  return {
    ...report,
    pages: report.pages.map(({ path, status, lang, h1, overflow, mobile }) => ({
      path,
      status,
      lang,
      h1,
      overflow,
      mobile,
    })),
  };
}
