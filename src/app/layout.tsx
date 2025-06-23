import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "@/components/footer";
import Header from "@/components/headerSection";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Jakub Kulesa",
  description: "Strona stworzona na potrzeby przedmiotu Programowanie stron internetowych",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl">

      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
      <Header sticky={true}/>
        {children}
      <Footer />
      </body>
    </html>
  );
}
