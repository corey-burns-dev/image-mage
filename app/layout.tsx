import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "OptiPic — Image Conversion & Compression",
  description:
    "A fast, beautiful spa for converting and compressing images in seconds.",
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
