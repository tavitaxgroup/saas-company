import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SISBIO | Signal-Direct Western Blot Imager",
  description:
    "Signal-Direct Imager is SISBIO's compact, high-sensitivity chemiluminescence Western blot imaging platform for protein research teams."
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
