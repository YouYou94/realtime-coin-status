/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  async rewrites() {
    return [
      {
        source: "/api/coins",
        destination: "https://api.coinpaprika.com/v1/tickers?quotes=KRW",
      },
    ];
  },
};

module.exports = nextConfig;
