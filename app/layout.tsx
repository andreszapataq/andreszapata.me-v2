import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "andreszapata.me - Welcome to ^Z",
  description: "^Z Portolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="icon"
          href="/favicon-dark.png"
          media="(prefers-color-scheme: light)"
        />
        <link
          rel="icon"
          href="/favicon-light.png"
          media="(prefers-color-scheme: dark)"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
