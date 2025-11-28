// Dependencies
import type { Metadata } from "next";
import { Outfit, Black_Ops_One } from "next/font/google";
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import "./globals.css";

// UI Components
import { Navbar } from "@/components/common/Navbar";
import { Footer } from "@/components/common/Footer";

// Constants
const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

const opsOne = Black_Ops_One({
  variable: "--font-black_ops_one",
  subsets: ["latin"],
  weight: "400"
});


config.autoAddCss = false

export const metadata: Metadata = {
  title: "Alejandro Reyna - Full-Stack Developer",
  description: "Full-stack developer from Guatemala with 12+ years of experience. Specializing in Python, JavaScript, TypeScript, and Ruby.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="light" className="scroll-smooth">
      <body className={`${outfit.variable} ${opsOne.variable} antialiased flex flex-col min-h-screen`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
