"use client";

import { SessionProvider } from "next-auth/react";
import { useState, type ReactNode, useEffect } from "react";
import { Toaster } from "react-hot-toast";

export default function Providers({ children }: { children: ReactNode }) {
  const [toastable, setToastable] = useState(false);

  useEffect(() => {
    setToastable(true);
  }, [])

  return (
    <SessionProvider>
      {children}
      {toastable && <Toaster />}
    </SessionProvider>
  );
}
