import type { Metadata } from "next";
import { Cormorant_Garamond, Lora } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-cormorant",
  display: "swap",
});

const lora = Lora({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-lora",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Elysian Flame - Hand-Poured Botanical Luxury Candles",
  description: "Discover our collection of 100% natural soy candles, infused with premium essential oils. Hand-poured with care for your home.",
  icons: {
    icon: '/images/cropped_logo.png',
    apple: '/images/cropped_logo.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${cormorant.variable} ${lora.variable} font-lora antialiased`}>
        {children}
      </body>
    </html>
  );
}
