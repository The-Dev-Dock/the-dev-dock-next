import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // output: "export", // Removing this line to allow API routes to work
  reactStrictMode: true,
  images: {
    domains: ['thedevdock.com'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'thedevdock.com',
        pathname: '**',
      },
    ],
  },
  async redirects() {
    return [
      {
        source: '/favicon.ico',
        destination: '/api/favicon',
        permanent: true,
      },
    ];
  },
  env: {
    EMAIL_USER: process.env.EMAIL_USER,
    EMAIL_PASSWORD: process.env.EMAIL_PASSWORD,
    RAZORPAY_KEY_SECRET: process.env.RAZORPAY_KEY_SECRET,
    RAZORPAY_KEY_ID: process.env.RAZORPAY_KEY_ID,
    NEXT_PUBLIC_RAZORPAY_KEY_ID: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID
  },
};

export default nextConfig;