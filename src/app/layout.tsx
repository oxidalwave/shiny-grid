import "~/styles/globals.css";
import { type ReactNode } from "react";
import Shell from "~/components/Shell";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html>
      <Shell>{children}</Shell>
    </html>
  );
}
