import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { SITE_NAME, SITE_TAGLINE } from '@/lib/constants'
import './globals.css'

export const metadata: Metadata = {
  title: {
    default: SITE_NAME,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_TAGLINE,
  metadataBase: new URL('https://surreyagriculturalsociety.co.uk'),
  icons: {
    icon: '/logo.png',
    apple: '/logo.png',
  },
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    siteName: SITE_NAME,
    images: [
      {
        url: '/SCAS%20Logo%20.png',
        width: 800,
        height: 600,
        alt: SITE_NAME,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: SITE_NAME,
    description: SITE_TAGLINE,
    images: ['/SCAS%20Logo%20.png'],
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
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'Surrey County Agricultural Society',
              url: 'https://surreyagriculturalsociety.co.uk',
              logo: 'https://surreyagriculturalsociety.co.uk/SCAS%20Logo%20.png',
              foundingDate: '1955',
              description:
                'The Surrey County Agricultural Society promotes agriculture, countryside, and rural life across Surrey. Founded in 1955 from two historic societies dating back to 1829.',
              address: {
                '@type': 'PostalAddress',
                addressLocality: 'Guildford',
                addressRegion: 'Surrey',
                addressCountry: 'GB',
              },
              email: 'scas@surreycountyshow.co.uk',
            }),
          }}
        />
      </head>
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
