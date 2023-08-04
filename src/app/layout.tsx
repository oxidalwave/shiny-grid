import "~/styles/globals.css";
import { type ReactNode } from "react";
import Shell from "~/components/Shell";
import { Analytics } from "@vercel/analytics/react";
import Head from "next/head";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <meta property="og:type" content="website" />
        <meta property="og:title" content="Shiny Grid" />
        <meta property="og:description" content="Game for guessing " />
        <meta property="og:image" content="/icons/pokeball.png" />
        <meta property="og:url" content="https://shiny-grid.oxidalwave.com" />
      </Head>
      <body className="bg-slate-900 font-pokemon text-white">
        <Shell>{children}</Shell>
        <Analytics />
      </body>
    </html>
  );
}
