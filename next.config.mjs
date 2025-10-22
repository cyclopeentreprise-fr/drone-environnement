/** @type {import('next').NextConfig} */
const nextConfig = {
  // Next 15
  typedRoutes: true,
  // Skip ESLint during Vercel builds (tu pourras le réactiver plus tard)
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
