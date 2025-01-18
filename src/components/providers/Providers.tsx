"use client";

import { SessionProvider } from "next-auth/react";
import { type ReactNode } from "react";
import { Toaster } from "react-hot-toast";
import { TrpcProvider } from "./TrpcProvider";

export default function Providers({ children }: { children: ReactNode }) {
  return (
    <SessionProvider>
      <TrpcProvider>
        {children}
        <Toaster />
      </TrpcProvider>
    </SessionProvider>
  );
}
