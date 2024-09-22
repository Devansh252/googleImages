/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
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
