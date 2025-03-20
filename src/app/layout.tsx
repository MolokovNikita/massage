import type { Metadata } from "next";
import { Cormorant_Garamond } from "next/font/google";
import "./globals.scss";

const cormorantGaramond = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["cyrillic"],
  weight: ["300", "700"],
  style: ["normal", "italic"],
});
export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={`${cormorantGaramond.variable}`}>{children}</body>
    </html>
  );
}
