import { type ReactNode } from "react";
import Providers from "~/components/Providers";

export default function Shell({ children }: { children: ReactNode }) {
  return (
    <Providers>
      <body className="bg-slate-900 font-pokemon text-white">
        <main className="">{children}</main>
      </body>
    </Providers>
  );
}