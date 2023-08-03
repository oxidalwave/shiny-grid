"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { SessionProvider } from "next-auth/react";
import { useState, type ReactNode, useEffect } from "react";
import { Toaster } from "react-hot-toast";

const queryClient = new QueryClient();

export default function Providers({ children }: { children: ReactNode }) {
  const [toastable, setToastable] = useState(false);

  useEffect(() => {
    setToastable(true);
  }, []);

  return (
    <SessionProvider>
      <QueryClientProvider client={queryClient}>
        {children}
        {toastable && <Toaster />}
        <ReactQueryDevtools />
      </QueryClientProvider>
    </SessionProvider>
  );
}
