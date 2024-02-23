"use client";

import { SessionProvider } from "next-auth/react";
import { type ReactNode } from "react";
import { Toaster } from "react-hot-toast";
import { TrpcProvider } from "./TrpcProvider";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

export default function Providers({ children }: { children: ReactNode }) {
  return (
    <SessionProvider>
      <TrpcProvider>
        {children}
        <Toaster />
        <Analytics />
        <SpeedInsights />
      </TrpcProvider>
    </SessionProvider>
  );
}
