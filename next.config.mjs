/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // This tells Next.js to export a static site

  webpack: (config, { dev, isServer }) => {
    if (dev && !isServer) {
      config.cache = false;
    }
    return config;
  }
};

export default nextConfig;
