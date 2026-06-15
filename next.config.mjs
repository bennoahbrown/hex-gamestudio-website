/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/cashclock/demo",
        destination: "/cash-clock/demo",
        permanent: true,
      },
    ];
  },
  async rewrites() {
    return [
      {
        source: "/cash-clock/demo",
        destination: "/cash-clock/demo/index.html",
      },
    ];
  },
};

export default nextConfig;
