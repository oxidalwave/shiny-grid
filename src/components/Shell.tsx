import { type ReactNode } from "react";
import Providers from "~/components/providers/Providers";

export default function Shell({ children }: { children: ReactNode }) {
  return (
    <main className="">
      <Providers>{children}</Providers>
    </main>
  );
}
