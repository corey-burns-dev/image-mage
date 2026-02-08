import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Image Mage — Fast Image Conversion & Compression",
  description:
    "A fast, beautiful, and private tool for converting and compressing images directly in your browser. Supports WebP, JPEG, PNG, and more with zero server uploads.",
  keywords: [
    "Image Converter",
    "Image Compressor",
    "WebP Converter",
    "PNG to JPEG",
    "Browser-based Image Tool",
    "Image Mage",
    "Corey Burns",
  ],
  authors: [{ name: "Corey Burns" }],
  openGraph: {
    title: "Image Mage — Fast Image Conversion & Compression",
    description:
      "Convert and compress images instantly in your browser. Private, fast, and secure.",
    type: "website",
    siteName: "Image Mage",
  },
  twitter: {
    card: "summary_large_image",
    title: "Image Mage — Fast Image Conversion & Compression",
    description:
      "Convert and compress images instantly in your browser. Private, fast, and secure.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
