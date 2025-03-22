import type { Metadata } from "next";
import { Cormorant_Garamond } from "next/font/google";
import "./globals.scss";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";

const cormorantCormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["cyrillic"],
  weight: ["300"],
  style: ["normal", "italic"],
});
const cormorantCormorantBold = Cormorant_Garamond({
  variable: "--font-cormorant-bold",
  subsets: ["cyrillic"],
  weight: ["700"],
  style: ["normal"],
});
export const metadata: Metadata = {
  title: "Аппаратный массаж СФЕРА – Москва, Строгино",
  description:
    "Эффективный аппаратный массаж в Москве – улучшение кровообращения, избавление от напряжения и целлюлита.",
  keywords: [
    "массаж Строгино",
    "аппаратный массаж Строгино",
    "массаж в Москве",
    "антицеллюлитный массаж",
    "лимфодренажный массаж",
    "лечебный массаж",
  ],
  robots: "index, follow",
  metadataBase: new URL("https://ваш-домен.ru"),

  openGraph: {
    title: "Аппаратный массаж СФЕРА",
    description:
      "Эффективный аппаратный массаж в Москве – улучшение кровообращения, избавление от напряжения и целлюлита.",
    images: "/images/main_photo.jpeg",
    type: "website",
    locale: "ru_RU",
    siteName: "Студия массажа СФЕРА",
  },

  icons: {
    icon: [
      { url: "/favicon-32x32.png", sizes: "32x32" },
      { url: "/favicon-16x16.png", sizes: "16x16" },
      { url: "/favicon.ico", rel: "shortcut icon" },
    ],
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body
        className={`${cormorantCormorant.variable} ${cormorantCormorantBold.variable}`}
      >
        <SpeedInsights />
        <Analytics />
        {children}
      </body>
    </html>
  );
}
