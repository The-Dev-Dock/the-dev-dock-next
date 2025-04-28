import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: "export", 
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  env: {
    EMAIL_USER: process.env.EMAIL_USER,
    EMAIL_PASSWORD: process.env.EMAIL_PASSWORD,
    RAZORPAY_KEY_SECRET: process.env.RAZORPAY_KEY_SECRET,
    RAZORPAY_KEY_ID: process.env.RAZORPAY_KEY_ID
  },
};

export default nextConfig;