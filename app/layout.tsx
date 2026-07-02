import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SISBIO | Signal-Direct Imager and Bioproduction Products",
  description:
    "Explore SISBIO's Signal-Direct chemiluminescence Western blot imager, Max-One software, technical specifications, and bioproduction media and feed products."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
