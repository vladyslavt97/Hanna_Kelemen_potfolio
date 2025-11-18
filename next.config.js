const path = require("path");

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images:{
    domains: ['scontent.cdninstagram.com', 'scontent-dus1-1.cdninstagram.com', 'scontent-fra3-1.cdninstagram.com', 'scontent-fra3-2.cdninstagram.com', 'npechxvoqfwdsvkljinx.supabase.co'], 
  },
  webpack: (config) => {
    config.resolve.alias = config.resolve.alias || {};
    config.resolve.alias.encoding = path.resolve(__dirname, "lib/encoding-fallback.js");
    return config;
  }
}

module.exports = nextConfig
