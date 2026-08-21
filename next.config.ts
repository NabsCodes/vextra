import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  images: {
    qualities: [100, 75],
  },
  turbopack: {
    // Keep Turbopack rooted at this app (avoids mis-detecting parent folders)
    root: path.join(__dirname),
  },
};

export default nextConfig;
