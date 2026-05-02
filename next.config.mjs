/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  reactCompiler: true,
  //  images: {
  //   domains: ["images.unsplash.com"],
  // }

  // images: {
  //   remotePatterns: [
  //     {
  //       protocol: 'https',
  //       hostname: 'images.unsplash.com',
  //     },
  //   ],
  // },

  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com', // Age theke thakle thakuk
      },
      {
        protocol: 'https',
        hostname: 'plus.unsplash.com', // Eta oboshshoi jog korte hobe
      },
    ],
  },
};

export default nextConfig;
