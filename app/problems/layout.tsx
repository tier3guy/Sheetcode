// Internal Imports
import "@/app/globals.css";
import type { Metadata } from "next";

// Components
import { SecondaryNavbar, Footer } from "@/components";

// Fonts
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Problems",
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
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css"
          integrity="sha512-z3gLpd7yknf1YoNbCzqRKc4qyor8gaKU1qmn+CShxbuBusANI9QpRohGBreCFkKxLhei6S9CQXFEbbKuqLg0DA=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </head>
      <body className={`${inter.className} bg-gray-100`}>
        <div className="border-t-8 border-gray-700 px-10">
          <SecondaryNavbar />
          {children}
        </div>
        {/* <Footer /> */}
      </body>
    </html>
  );
}
