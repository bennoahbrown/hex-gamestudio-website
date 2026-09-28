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
        source: "/cash-clock/live-demo",
        destination: "/cash-clock/live-demo/index.html",
      },
      {
        source: "/cash-clock/v2-demo",
        destination: "/cash-clock/v2-demo/index.html",
      },
    ];
  },
};

export default nextConfig;
