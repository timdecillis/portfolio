import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Image from "next/image";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Tim DeCillis Portfolio",
  description: "Portfolio for a software engineer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div>
          <Image alt='a picture of a white man in a maroon shirt' width={500} height={500} src={"/Sibley (1).jpg"} />
          {children}
        </div>
      </body>
    </html>
  );
}
