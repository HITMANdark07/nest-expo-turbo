import type { NextConfig } from "next";
import { config } from "dotenv";
import { resolve } from "path";

// Load environment variables from root .env file
config({
  path: resolve(__dirname, "../../.env"),
  debug: false,
  override: false,
});

const nextConfig: NextConfig = {
  // Transpile packages from the monorepo
  transpilePackages: ["shared"],

  // Environment variables
  env: {
    // These will be available to the client-side
    NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,
    NEXT_PUBLIC_APP_NAME: process.env.NEXT_PUBLIC_APP_NAME,
  },

  // Turbopack configuration (stable in Next.js 15+)
  turbopack: {
    // Configure turbopack options here if needed
  },
};

export default nextConfig;
