import "~/styles/globals.css";
import { type ReactNode } from "react";
import Account from "~/components/auth/Account";
import Providers from "~/components/Providers";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html>
      <Providers>
        <body className="bg-slate-900 font-pokemon text-white">
          <nav className="h-8 bg-slate-800">
            <Account />
          </nav>
          <main>{children}</main>
        </body>
      </Providers>
    </html>
  );
}
