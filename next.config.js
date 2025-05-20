/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/devio',
  assetPrefix: '/devio',
  trailingSlash: true,
  // Enable static exports and optimize for GitHub Pages
  distDir: 'out',
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: true,
  },
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  // This is key for static sites
  experimental: {
    images: {
      unoptimized: true,
    },
  },
  // Ensure all CSS is inlined
  optimizeFonts: true,
}

module.exports = nextConfig 