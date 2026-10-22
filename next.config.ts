import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  cacheComponents: true,
  // R49b legal config, inlined at build so server and client agree. ACE_CONTACT_EMAIL defaults to the official address.
  env: {
    ACE_CONTACT_EMAIL: process.env.ACE_CONTACT_EMAIL || "ace.platform.official@gmail.com",
    ACE_LEGAL_EFFECTIVE_DATE: process.env.ACE_LEGAL_EFFECTIVE_DATE || new Date().toISOString().slice(0, 10),
  },
  devIndicators: false,
  poweredByHeader: false,
  async headers() {
    const security = [
      { key: "X-Content-Type-Options", value: "nosniff" },
      { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
      { key: "X-Frame-Options", value: "DENY" },
      { key: "Content-Security-Policy", value: "frame-ancestors 'none'; base-uri 'self'; object-src 'none'; form-action 'self' https://steamcommunity.com" },
      { key: "Permissions-Policy", value: 'camera=(), microphone=(), geolocation=(), payment=(self "https://*.paddle.com")' },
      ...(process.env.NODE_ENV === "production"
        ? [{ key: "Strict-Transport-Security", value: "max-age=31536000; includeSubDomains" }]
        : []),
    ];
    return [
      { source: "/:path*", headers: security },
      { source: "/admin/:path*", headers: [{ key: "Cache-Control", value: "no-store" }, { key: "X-Robots-Tag", value: "noindex, nofollow" }] },
    ];
  },
  partialPrefetching: true,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
