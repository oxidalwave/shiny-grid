"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { SessionProvider } from "next-auth/react";
import { useState, type ReactNode, useEffect } from "react";
import { Toaster } from "react-hot-toast";
import { api } from "~/utils/api";

const queryClient = new QueryClient({
  defaultOptions: { queries: { staleTime: 5000 } },
});

function Providers({ children }: { children: ReactNode }) {
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

export default api.withTRPC(Providers);
