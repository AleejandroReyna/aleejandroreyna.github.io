// Dependencies
import type { Metadata } from "next";
import { Outfit, Black_Ops_One } from "next/font/google";
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import "./globals.css";

// UI Components
import { Navbar } from "@/components/common/Navbar";
import { Footer } from "@/components/common/Footer";
import { GoogleAnalytics } from '@next/third-parties/google'

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
  metadataBase: new URL('https://alejandroreyna.com'),
  title: {
    default: 'Alejandro Reyna | Full-Stack Developer & Software Engineer',
    template: '%s | Alejandro Reyna'
  },
  description: 'Experienced Full-Stack Developer from Guatemala with 12+ years building scalable web applications. Expert in Python, Django, JavaScript, TypeScript, React, Node.js, and Ruby on Rails. Available for remote opportunities.',
  keywords: [
    'Full-Stack Developer',
    'Software Engineer',
    'Web Developer',
    'Python Developer',
    'Django Developer',
    'JavaScript Developer',
    'TypeScript Developer',
    'React Developer',
    'Node.js Developer',
    'Ruby on Rails Developer',
    'Remote Developer',
    'Guatemala Developer',
    'Alejandro Reyna',
    'Frontend Developer',
    'Backend Developer',
    'API Development',
    'PostgreSQL',
    'MongoDB',
    'AWS'
  ],
  authors: [{ name: 'Alejandro Reyna' }],
  creator: 'Alejandro Reyna',
  publisher: 'Alejandro Reyna',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' }
    ],
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://alejandroreyna.com',
    siteName: 'Alejandro Reyna Portfolio',
    title: 'Alejandro Reyna | Full-Stack Developer & Software Engineer',
    description: 'Experienced Full-Stack Developer from Guatemala with 12+ years building scalable web applications. Expert in Python, Django, JavaScript, TypeScript, React, Node.js, and Ruby on Rails.',
    images: [
      {
        url: '/images/about/me.jpg',
        width: 1200,
        height: 630,
        alt: 'Alejandro Reyna - Full-Stack Developer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Alejandro Reyna | Full-Stack Developer & Software Engineer',
    description: 'Experienced Full-Stack Developer from Guatemala with 12+ years building scalable web applications. Expert in Python, Django, JavaScript, TypeScript, React, Node.js, and Ruby on Rails.',
    creator: '@aleejandroreyna',
    images: ['/images/about/me.jpg'],
  },
  verification: {
    google: 'G-J0NP6MJ4QZ',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="custom" className="scroll-smooth">
      <GoogleAnalytics gaId={'G-J0NP6MJ4QZ'} />
      <body className={`${outfit.variable} ${opsOne.variable} antialiased flex flex-col min-h-screen`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
