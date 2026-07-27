import type { Metadata } from "next";
import { Archivo, Space_Grotesk, IBM_Plex_Mono, Cormorant_Garamond } from "next/font/google";
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import { NextIntlClientProvider } from 'next-intl';
import { getLocale, getMessages } from 'next-intl/server';
import "./globals.css";

// UI Components
import { Navbar } from "@/components/common/Navbar";
import { Footer } from "@/components/common/Footer";
import { ScrollRevealInit } from "@/components/common/ScrollRevealInit";
import { AmbientBackground } from "@/components/common/AmbientBackground";
import { GoogleAnalytics } from '@next/third-parties/google'
import { envs } from "@/lib/envs";
import { getSiteSettings } from "@/lib/payload";

// Constants
const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const ibmPlexMono = IBM_Plex_Mono({
  variable: "--font-ibm-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

const cormorantGaramond = Cormorant_Garamond({
  variable: "--font-cormorant-garamond",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
});


config.autoAddCss = false

export const metadata: Metadata = {
  metadataBase: new URL('https://alejandroreyna.com'),
  title: {
    default: 'Alejandro Reyna | Full-Stack Developer & Software Engineer',
    template: '%s | Alejandro Reyna'
  },
  description: 'Full-Stack Developer from Guatemala. 13+ years building web platforms, APIs, and conversational AI. Python, Django, TypeScript, React, Node.js. Available for remote work.',
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
    'AWS',
    'Chatbot Developer',
    'Conversational AI',
    'LLM Agents',
    'WhatsApp Bot Development',
    'Rasa Developer'
  ],
  authors: [{ name: 'Alejandro Reyna' }],
  creator: 'Alejandro Reyna',
  publisher: 'Alejandro Reyna',
  alternates: {
    canonical: '/',
  },
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
    description: 'Full-Stack Developer from Guatemala. 13+ years building web platforms, APIs, and conversational AI — chatbots and LLM agents since 2019.',
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
    description: 'Full-Stack Developer from Guatemala. 13+ years building web platforms, APIs, and conversational AI — chatbots and LLM agents since 2019.',
    creator: '@aleejandroreyna',
    images: ['/images/about/me.jpg'],
  },
  verification: {
    google: 'G-J0NP6MJ4QZ',
  },
};

const asUrl = (handle: string, prefix: string) =>
  handle.startsWith('http') ? handle : `${prefix}${handle}`;

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale();
  const messages = await getMessages();
  const settings = await getSiteSettings();
  const social = settings.social

  const sameAs = [
    social?.github ? asUrl(social.github, 'https://github.com/') : null,
    social?.linkedin ? asUrl(social.linkedin, 'https://linkedin.com/in/') : null,
  ].filter(Boolean)

  const jsonLd = [
    {
      '@context': 'https://schema.org',
      '@type': 'Person',
      name: 'Alejandro Reyna',
      url: 'https://alejandroreyna.com',
      jobTitle: 'Full-Stack Developer',
      description: 'Full-Stack Developer from Guatemala with 13+ years building web platforms and conversational AI.',
      image: 'https://alejandroreyna.com/images/about/me.jpg',
      address: {
        '@type': 'PostalAddress',
        addressCountry: 'GT',
      },
      ...(sameAs.length > 0 ? { sameAs } : {}),
    },
    {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      name: 'Alejandro Reyna Portfolio',
      url: 'https://alejandroreyna.com',
    },
  ]

  return (
    <html lang={locale} data-theme="custom" className="scroll-smooth">
      <GoogleAnalytics gaId={envs.googleAnalyticsId} />
      <body className={`antialiased flex flex-col min-h-screen text-foreground ${archivo.variable} ${spaceGrotesk.variable} ${ibmPlexMono.variable} ${cormorantGaramond.variable}`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <NextIntlClientProvider locale={locale} messages={messages}>
          <AmbientBackground />
          <ScrollRevealInit />
          <Navbar />
          {children}
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
