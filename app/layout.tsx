import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Navbar } from "@/components";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sheetcode",
  description:
    "Sheetcode is a one and only platform that hosts all the popular coding sheets out there in the market with such a personalized experience.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-100 px-10`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
