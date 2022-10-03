// @ts-check

/**
 * @type {import('next').NextConfig}
 **/
module.exports = {
  reactStrictMode: true,
  swcMinify: true,
  infuraKey: process.env.INFURA_KEY,
  alchemyKey: process.env.ALCHEMY_KEY,
};
