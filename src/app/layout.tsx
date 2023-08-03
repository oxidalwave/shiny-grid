import "~/styles/globals.css";
import { type ReactNode } from "react";
import Shell from "~/components/Shell";
import { Analytics } from "@vercel/analytics/react";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html>
      <Shell>{children}</Shell>
      <Analytics />
    </html>
  );
}
