import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Milan & Kristina",
  description: "Wedding invitation"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sr">
      <body>{children}</body>
    </html>
  );
}
