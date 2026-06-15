/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/cashclock/demo",
        destination: "/cashclock/demo/index.html",
      },
    ];
  },
};

export default nextConfig;
