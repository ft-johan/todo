import type { Metadata } from "next";
import { Oxanium } from "next/font/google";
import "./globals.css";


const inter = Oxanium({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MINI Do",
  description: "Minimalist's todo",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
