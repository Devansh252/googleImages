/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      // Existing pattern
      {
        protocol: "https",
        hostname: "cdn-icons-png.freepik.com",
        port: "",
        pathname: "/**",
      },
      // New pattern for picsum.photos
      {
        protocol: "https",
        hostname: "picsum.photos",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
