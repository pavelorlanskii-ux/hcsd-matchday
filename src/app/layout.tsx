import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const horta = localFont({
  src: "../assets/fonts/Horta_555_SD.ttf",
  variable: "--font-horta",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Matchday | ХК Шанхай Дрэгонс - Вечер хоккея на СКА Арене",
  description: "Программа матчевого дня: активности, специальные предложения, информация о матче и билеты. ХК Шанхай Дрэгонс - Приезжайте заранее!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${horta.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
