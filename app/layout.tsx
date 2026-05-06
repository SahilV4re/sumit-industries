import type { Metadata } from "next";
import "./globals.css";

import MenuBar from "@/components/navbar";
import Footer from "@/components/footer";
import { cn } from "@/lib/utils";



export const metadata: Metadata = {
  title: "Sumit Industries",
  description: "High-Quality Manufacturing Solutions",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn("light", "font-sans")}>
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body-md text-on-surface selection:bg-primary-container selection:text-on-primary-container min-h-full flex flex-col">
        <MenuBar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
