import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { SiteHeader } from "@/components/SiteHeader";
import { assetPath } from "@/content/assets";
import { siteIdentity } from "@/content/site";
import "./globals.css";

const metadataBase = new URL(
  `${process.env.NEXT_PUBLIC_SITE_URL ?? "https://aleksandar-tomovski.alek-tomos.chatgpt.site"}/`,
);
const ogImage = new URL("og.png", metadataBase).toString();

export const metadata: Metadata = {
  metadataBase,
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
  manifest: assetPath("/site.webmanifest"),
  icons: {
    icon: [
      { url: assetPath("/favicon.ico"), sizes: "any" },
      { url: assetPath("/favicon.svg"), type: "image/svg+xml" },
      { url: assetPath("/favicon-32x32.png"), sizes: "32x32", type: "image/png" },
      { url: assetPath("/favicon-16x16.png"), sizes: "16x16", type: "image/png" },
    ],
    shortcut: assetPath("/favicon.ico"),
    apple: [
      { url: assetPath("/apple-touch-icon.png"), sizes: "180x180", type: "image/png" },
    ],
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
