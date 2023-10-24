import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Favicon from "/public/images/favicon.ico";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Timer App",
  description: "Timer application using Next.js.",
  icons: [{ rel: "icon", url: Favicon.src }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
