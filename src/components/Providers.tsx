"use client";

import { SessionProvider } from "next-auth/react";
import { useState, type ReactNode, useEffect } from "react";
import { Toaster } from "react-hot-toast";
import TrpcProvider from "./util/TrpcProvider";

export default function Providers({ children }: { children: ReactNode }) {
  const [toastable, setToastable] = useState(false);

  useEffect(() => {
    setToastable(true);
  }, []);

  return (
    <SessionProvider>
      <TrpcProvider>
        {children}
        {toastable && <Toaster />}
      </TrpcProvider>
    </SessionProvider>
  );
}
