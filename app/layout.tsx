import type { Metadata } from 'next'
import { Geist, Syne } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { Navbar } from '@/components/navbar'
import { CookieBanner } from '@/components/cookie-banner'
import { JsonLd } from '@/components/seo/json-ld'
import { Footer } from '@/components/sections/footer'
import { createOrganizationSchema, createWebsiteSchema, siteConfig } from '@/lib/seo'
import './globals.css'

const defaultMetaTitle = 'MF Digital Studio | Sıradanlığı Unutun, Dijitalde Zirveye Çıkın'
const defaultMetaDescription = 'Özel web tasarımı, yönetim panelleri ve SEO çözümleriyle markanızı dijitalde profesyonel bir görünüme kavuşturuyoruz.'
const defaultSocialImage = '/og-image.png'

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
});

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: defaultMetaTitle,
    template: `%s | ${siteConfig.name}`,
  },
  description: defaultMetaDescription,
  applicationName: siteConfig.name,
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: siteConfig.locale,
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: defaultMetaTitle,
    description: defaultMetaDescription,
    images: [
      {
        url: defaultSocialImage,
        alt: defaultMetaTitle,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: defaultMetaTitle,
    description: defaultMetaDescription,
    images: [defaultSocialImage],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  icons: {
    icon: '/favicon.png',
    apple: '/favicon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const structuredData = [createOrganizationSchema(), createWebsiteSchema()]

  return (
    <html lang="tr">
      <body className={`${geist.variable} ${syne.variable} font-sans antialiased bg-black`}>
        <JsonLd id="site-structured-data" data={structuredData} />
        <Navbar />
        {children}
        <Footer />
        <CookieBanner />
        <Analytics />
      </body>
    </html>
  )
}

