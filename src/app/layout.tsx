import type { Metadata } from "next";
import { business } from "@/data/business";
import { siteUrl } from "@/lib/site";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import "./globals.css";

const description = `Residential and commercial construction, renovation and property-improvement services across ${business.market}. Contact ${business.name} for a free quote.`;
export const metadata: Metadata = {
  metadataBase: siteUrl,
  title: {
    default: `${business.name} | ${business.market}`,
    template: `%s | ${business.name}`,
  },
  description,
  robots: { index: Boolean(siteUrl), follow: Boolean(siteUrl) },
  openGraph: {
    type: "website",
    locale: "en_AU",
    siteName: business.name,
    title: business.name,
    description,
  },
};
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-AU">
      <body className="antialiased">
        <a
          href="#main-content"
          className="fixed left-6 top-4 z-50 -translate-y-24 bg-foreground px-5 py-3 text-background focus:translate-y-0"
        >
          Skip to content
        </a>
        <SiteHeader />
        <main id="main-content" tabIndex={-1}>
          {children}
        </main>
        <SiteFooter />
      </body>
    </html>
  );
}
