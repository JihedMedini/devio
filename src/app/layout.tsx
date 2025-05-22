import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "./animations.css";
import Script from "next/script";

const inter = Inter({ 
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Devio | Solutions Digitales sur Mesure pour Votre Entreprise",
  description: "Transformez vos idées en solutions digitales performantes avec Devio. Développement web, applications mobiles, conseil technologique - 40% plus rapide que la moyenne du marché.",
  keywords: ["développement web", "applications mobiles", "solutions digitales", "transformation numérique", "développement NextJS", "React", "agence digitale", "Paris"],
  authors: [{ name: "Devio" }],
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://onedevio.me",
    title: "Devio | Solutions Digitales sur Mesure pour Votre Entreprise",
    description: "Transformez vos idées en solutions digitales performantes avec Devio. Développement web, applications mobiles, conseil technologique - 40% plus rapide que la moyenne du marché.",
    siteName: "Devio",
    images: [
      {
        url: `/images/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: "Devio - Solutions Digitales sur Mesure"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Devio | Solutions Digitales sur Mesure pour Votre Entreprise",
    description: "Transformez vos idées en solutions digitales performantes avec Devio. Développement web, applications mobiles, conseil technologique.",
    images: [`/images/twitter-image.jpg`]
  },
  alternates: {
    canonical: "https://onedevio.me",
    languages: {
      'fr': 'https://onedevio.me',
      'en': 'https://onedevio.me/en'
    }
  },
  metadataBase: new URL('https://onedevio.me'),
  viewport: "width=device-width, initial-scale=1, maximum-scale=5",
  themeColor: "#064663",
  category: "technology"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={inter.variable}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        
        {/* Force load stylesheet with explicit path */}
        <link rel="stylesheet" href="/_next/static/css/app.css" precedence="high" />
        
        <Script
          id="schema-structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Devio",
              "url": "https://onedevio.me",
              "logo": "https://onedevio.me/logo.png",
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+33-1-23-45-67-89",
                "contactType": "customer service",
                "availableLanguage": "French"
              },
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "FR",
                "addressLocality": "Paris",
                "postalCode": "75001",
                "streetAddress": "75 Rue de Paris"
              },
              "sameAs": [
                "https://www.linkedin.com/company/devio",
                "https://twitter.com/devio",
                "https://github.com/devio"
              ],
              "description": "Devio est une agence digitale spécialisée dans le développement de solutions numériques sur mesure, 40% plus rapide que la moyenne du marché."
            })
          }}
        />
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
