/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "dodo.ac",
      "images.unsplash.com",
      "i.pinimg.com",
      "cdn.medina.dev",
      "res.cloudinary.com",
    ],
  },
};

module.exports = nextConfig;
