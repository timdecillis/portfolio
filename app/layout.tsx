import type { Metadata } from "next";
import { Josefin_Sans } from "next/font/google";
import "./globals.css";
import { Header } from "../components/header";
import { Footer } from "../components/footer";

const josefinSans = Josefin_Sans({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Tim DeCillis",
  description:
    "Portfolio of Tim DeCillis — software engineer, musician, and music teacher based in Oakland, California.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${josefinSans.variable} antialiased min-h-screen flex flex-col`}>
        <Header />
        <main className="px-6 md:px-16 lg:px-32 xl:px-56 flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
