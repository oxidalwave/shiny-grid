import "~/styles/globals.css";
import { type ReactNode } from "react";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html>
      <body className="font-pokemon">{children}</body>
    </html>
  );
}
