import type { Metadata } from "next";
import { Pixelify_Sans } from "next/font/google";
import "./globals.scss";

const pixelify = Pixelify_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  fallback: ["sans-serif"],
});

export const metadata: Metadata = {
  title: "Muhammad Rizki Akbar | Front End Developer",
  description: "Personal Portfolio",
  keywords: [
    "react",
    "next",
    "portfolio",
    "developer",
    "web developer",
    "frontend",
    "frontend developer",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={pixelify.className}>{children}</body>
    </html>
  );
}
