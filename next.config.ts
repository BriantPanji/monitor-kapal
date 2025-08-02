import type { NextConfig } from "next";

// next.config.js
const nextConfig: NextConfig = {
  webpack(config, { isServer }) {
    // konfigurasi asset images (ikon Leaflet)
    config.module.rules.push({
      test: /\.(png|jpe?g|gif|svg)$/i,
      type: 'asset/resource',
      generator: { filename: 'static/media/[name].[hash][ext]' },
    });
    return config;
  },

  async headers() {
    return [
      {
        source: "/api/:path*",
        headers: [
          { key: "Access-Control-Allow-Origin", value: "*" },
          { key: "Access-Control-Allow-Methods", value: "GET,POST,OPTIONS" },
          { key: "Access-Control-Allow-Headers", value: "Content-Type" },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
