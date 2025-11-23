import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'StartupCouncil — AI Advisory Platform',
  description: 'Five legendary advisors. One consensus. Deploy your private AI council for strategic decision-making.',
  keywords: 'AI advisory, startup advice, decision making, artificial intelligence',
  authors: [{ name: 'StartupCouncil' }],
  openGraph: {
    title: 'StartupCouncil — AI Advisory Platform',
    description: 'Deploy your private AI council for strategic decision-making.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'StartupCouncil — AI Advisory Platform',
    description: 'Deploy your private AI council for strategic decision-making.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
}