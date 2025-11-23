import type { Metadata, Viewport } from 'next'
import './globals.css'

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#C15F3C',
}

export const metadata: Metadata = {
  metadataBase: new URL('https://council-landing.vercel.app'),
  title: {
    default: 'StartupCouncil — AI Advisory Platform',
    template: '%s | StartupCouncil'
  },
  description: 'Deploy your private AI council with Naval, Elon, Larry, Alex, and Pavel. Five legendary advisors debate your toughest decisions to reach consensus.',
  keywords: ['AI advisory', 'startup advice', 'decision making', 'artificial intelligence', 'business strategy', 'entrepreneurship', 'AI council', 'startup mentor'],
  authors: [{ name: 'StartupCouncil' }],
  creator: 'StartupCouncil',
  publisher: 'StartupCouncil',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: 'StartupCouncil — AI Advisory Platform',
    description: 'Five legendary advisors. One consensus. Deploy your private AI council in 60 seconds.',
    url: 'https://council-landing.vercel.app',
    siteName: 'StartupCouncil',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'StartupCouncil - AI Advisory Platform',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'StartupCouncil — AI Advisory Platform',
    description: 'Five legendary advisors. One consensus. Deploy your private AI council.',
    images: ['/og-image.png'],
    creator: '@startupcouncil',
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
  alternates: {
    canonical: 'https://council-landing.vercel.app',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
      </head>
      <body className="antialiased">
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'SoftwareApplication',
              name: 'StartupCouncil',
              applicationCategory: 'BusinessApplication',
              operatingSystem: 'Web',
              description: 'AI advisory platform with five legendary advisors who debate your decisions.',
              offers: {
                '@type': 'Offer',
                price: '0',
                priceCurrency: 'USD',
              },
              aggregateRating: {
                '@type': 'AggregateRating',
                ratingValue: '4.9',
                ratingCount: '127',
              },
            }),
          }}
        />
      </body>
    </html>
  )
}