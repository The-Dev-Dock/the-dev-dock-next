import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: "export", 
  reactStrictMode: true,
  env: {
    EMAIL_USER: process.env.EMAIL_USER,
    EMAIL_PASSWORD: process.env.EMAIL_PASSWORD,
  },
};

export default nextConfig;