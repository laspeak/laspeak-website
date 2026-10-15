import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  ...(process.env.STATIC_EXPORT === "1" ? { output: "export" } : {}),
  turbopack: { root: process.cwd() },
  outputFileTracingRoot: process.cwd(),
  trailingSlash: true,
  poweredByHeader: false,
  images: {
    loader: "custom",
    loaderFile: "./lib/image-loader.ts",
    deviceSizes: [384, 640, 828, 1080, 1440, 1920],
    imageSizes: [192, 256],
  },
  async redirects() {
    if (process.env.STATIC_EXPORT === "1") return [];
    return [
      {
        source: "/en/research",
        destination: "/en/product/",
        permanent: true,
      },
      {
        source: "/fr/recherche",
        destination: "/fr/produit/",
        permanent: true,
      },
    ];
  },
  async headers() {
    if (process.env.STATIC_EXPORT === "1") return [];
    return [
      {
        source: "/images/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=86400, stale-while-revalidate=604800",
          },
        ],
      },
      {
        source: "/:path*",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
