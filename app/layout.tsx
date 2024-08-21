import type { Metadata } from "next";
import { Inter, Handjet, JetBrains_Mono, Archivo, Jura, Saira } from "next/font/google";

import Navbar from "./components/Navbar"
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

const handjet = Handjet({subsets: ["latin"]})

const jetbrains = JetBrains_Mono({subsets: ["latin"]})

const archivo = Archivo({subsets: ["latin"]})

const jura = Jura({subsets: ["latin"]})

const saira= Saira({subsets: ["latin"]})


export const metadata: Metadata = {
  title: "Mishran's Portfolio",
  description: "", 
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={jetbrains.className}>
      <body className="min-h-screen relative ">
        {children}
        <footer className="text-center py-4 text-sm text-gray-500">
          &copy; By Mishran Haque, 2024
        </footer>
      </body>
    </html>
  );
}
