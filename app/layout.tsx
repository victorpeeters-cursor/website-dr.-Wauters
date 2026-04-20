import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/lib/i18n/LanguageContext";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  title: "Wauters & Vandoorne | Pneumologie — Overijse",
  description:
    "Pneumologiepraktijk Dr. Isabelle Wauters en Dr. Eva Vandoorne te Overijse. Gespecialiseerd in astma, COPD, longfunctieonderzoek, slaapstoornissen en meer. Maak een afspraak.",
  keywords: [
    "pneumoloog",
    "longarts",
    "Overijse",
    "astma",
    "COPD",
    "longfunctieonderzoek",
    "slaapstoornissen",
    "Dr. Wauters",
    "Dr. Vandoorne",
  ],
  openGraph: {
    title: "Wauters & Vandoorne | Pneumologie",
    description:
      "Pneumologiepraktijk te Overijse. Gespecialiseerde longzorg met persoonlijke aandacht.",
    type: "website",
    locale: "nl_BE",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nl" className={`${inter.variable} ${playfair.variable}`}>
      <body className="font-sans antialiased">
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
