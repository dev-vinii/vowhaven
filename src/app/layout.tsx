import type { Metadata } from "next";

import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { Providers } from "./providers";
import { wedding } from "@/service/wedding";
import "@/styles/index.css";

export const metadata: Metadata = {
  title: {
    default: `Vowhaven — ${wedding.partnerOne} & ${wedding.partnerTwo}`,
    template: "%s | Vowhaven",
  },
  description: wedding.greeting,
  openGraph: {
    title: `Vowhaven — ${wedding.partnerOne} & ${wedding.partnerTwo}`,
    description: wedding.greeting,
    type: "website",
    locale: "pt_BR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body>
        <Providers>
          <div className="flex min-h-screen flex-col">
            <SiteHeader />
            <main className="flex-1">{children}</main>
            <SiteFooter />
          </div>
        </Providers>
      </body>
    </html>
  );
}
