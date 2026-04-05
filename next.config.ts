const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
  output: 'export', // static export
  basePath: isProd ? '/qaldybek-ustaz-1labx' : '',
  assetPrefix: isProd ? '/qaldybek-ustaz-1labx/' : '',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;