"use client";

import { Toaster } from "@/components/ui/sonner";
import { MotionConfig } from "motion/react";

export function AppProviders({ children }: { children: React.ReactNode }) {
  return (
    <MotionConfig reducedMotion="user">
      {children}
      <Toaster position="bottom-right" />
    </MotionConfig>
  );
}
