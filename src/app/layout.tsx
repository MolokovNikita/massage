import type {Metadata} from "next";
import {Cormorant_Garamond} from "next/font/google";
import "./globals.scss";

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
        <body
            className={`${cormorantCormorant.variable} ${cormorantCormorantBold.variable}`}
        >
        {children}

        </body>
        </html>
    );
}
