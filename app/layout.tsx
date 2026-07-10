import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { SiteHeader } from "@/components/SiteHeader";
import { siteIdentity } from "@/content/site";
import "./globals.css";

const metadataBase = process.env.NEXT_PUBLIC_SITE_URL
  ? new URL(process.env.NEXT_PUBLIC_SITE_URL)
  : undefined;
const ogImage = metadataBase
  ? new URL("/og.png", metadataBase).toString()
  : "/og.png";

export const metadata: Metadata = {
  ...(metadataBase ? { metadataBase } : {}),
  title: {
    default: `${siteIdentity.name} | ${siteIdentity.roleLine}`,
    template: `%s | ${siteIdentity.name}`,
  },
  description: siteIdentity.statement,
  applicationName: siteIdentity.name,
  authors: [{ name: siteIdentity.name }],
  creator: siteIdentity.name,
  openGraph: {
    title: siteIdentity.name,
    description: siteIdentity.statement,
    siteName: siteIdentity.name,
    type: "website",
    images: [
      {
        url: ogImage,
        width: 1800,
        height: 1024,
        alt: `${siteIdentity.name} - Code. Light. Movement. Language.`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteIdentity.name,
    description: siteIdentity.statement,
    images: [ogImage],
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <SiteHeader />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
