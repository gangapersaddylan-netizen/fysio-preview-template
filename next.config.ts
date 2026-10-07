import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  // 07-10-2026: bouwmoment van deze preview, voor de aftellende timerbalk (components/ui/preview-timer.tsx).
  env: {
    NEXT_PUBLIC_PREVIEW_GEMAAKT_OP: new Date().toISOString(),
  },
};

export default nextConfig;
