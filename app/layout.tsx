import type { Metadata, Viewport } from 'next'
import './globals.css'

const SITE_URL = 'https://furpass.app'
const TITLE = 'FurPass — Your pet’s whole world, in one secure link'
const DESCRIPTION =
  'Build a care guide for your pet in minutes. Share a private, expiring link with your sitter — no app required on their end.'

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: TITLE,
  description: DESCRIPTION,
  applicationName: 'FurPass',
  keywords: ['pet sitter', 'pet care guide', 'dog sitter', 'cat sitter', 'secure link', 'pet sharing', 'FurPass'],
  authors: [{ name: 'Summer Chang' }],
  openGraph: {
    type: 'website',
    url: SITE_URL,
    siteName: 'FurPass',
    title: TITLE,
    description: DESCRIPTION,
  },
  twitter: {
    card: 'summary_large_image',
    title: TITLE,
    description: DESCRIPTION,
  },
}

export const viewport: Viewport = {
  themeColor: '#252A34',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=DM+Sans:opsz,wght@9..40,400;9..40,500;9..40,600;9..40,700&family=Playpen+Sans:wght@400;600;700;800&display=swap" rel="stylesheet" />
      </head>
      <body>{children}</body>
    </html>
  )
}
