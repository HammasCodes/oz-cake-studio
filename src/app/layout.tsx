import type { Metadata } from "next";
import { Cormorant_Garamond, Jost } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-cormorant",
  display: "swap",
});

const jost = Jost({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-jost",
  display: "swap",
});

export const metadata: Metadata = {
  title: "O.Z. Cake Studio | Custom Wedding & Celebration Cakes in Mt Pleasant, SC",
  description:
    "O.Z. Cake Studio is a family-owned custom cake studio in Mt Pleasant, Charleston, South Carolina, specializing in wedding cakes since 2017. Custom wedding, birthday, and celebration cakes for Charleston, Mt Pleasant, Isle of Palms, and Kiawah Island. Just tell us your dream.",
  keywords: [
    "wedding cakes Charleston SC",
    "custom cakes Mt Pleasant",
    "wedding cake Isle of Palms",
    "wedding cake Kiawah Island",
    "custom birthday cakes Charleston",
    "cake studio Mt Pleasant SC",
  ],
  openGraph: {
    title: "O.Z. Cake Studio | Mt Pleasant, SC",
    description:
      "Just tell us your dream. Family-owned custom wedding and celebration cakes serving Charleston since 2017.",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${cormorant.variable} ${jost.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
