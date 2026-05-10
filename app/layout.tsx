import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "https://m360ict.com")
).replace(/\/$/, "");

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  applicationName: "Memart",
  title: {
    default:
      "Memart | M360ICT E-Commerce SaaS Management Platform | ই-কমার্স সিস্টেম",
    template: "%s | Memart E-Commerce SaaS",
  },
  description:
    "Memart by M360ICT is a bilingual e-commerce SaaS platform for online shopping, product and inventory control, admin management, order tracking, payment control, and delivery workflow.",
  keywords: [
    "Memart",
    "M360ICT",
    "M360ICT e-commerce",
    "e-commerce SaaS",
    "e-commerce management platform",
    "online shopping website",
    "admin panel",
    "product inventory control",
    "order management system",
    "payment and delivery workflow",
    "Bangladesh e-commerce software",
    "ই-কমার্স সিস্টেম",
    "ই-কমার্স সফটওয়্যার",
  ],
  authors: [{ name: "M360ICT", url: "https://m360ict.com" }],
  creator: "M360ICT",
  publisher: "M360ICT",
  category: "E-Commerce Software",
  alternates: {
    canonical: "/",
    languages: {
      en: "/",
      bn: "/",
    },
  },
  openGraph: {
    type: "website",
    url: "/",
    siteName: "Memart",
    title: "Memart | M360ICT E-Commerce SaaS Management Platform",
    description:
      "A complete e-commerce SaaS platform by M360ICT for storefront, admin control, inventory, orders, payments, and delivery workflow.",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Memart e-commerce SaaS platform by M360ICT",
      },
    ],
    locale: "en_US",
    alternateLocale: ["bn_BD"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Memart | M360ICT E-Commerce SaaS Platform",
    description:
      "Run products, orders, payments, delivery, and admin control from one e-commerce SaaS platform.",
    images: ["/twitter-image"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="bn">
      <body>
        <script
          dangerouslySetInnerHTML={{
            __html:
              "try{var l=localStorage.getItem('memart-language')==='bn'?'bn':'en';document.documentElement.dataset.lang=l;document.documentElement.lang=l==='bn'?'bn':'en'}catch(e){}",
          }}
        />
        {children}
      </body>
    </html>
  );
}
