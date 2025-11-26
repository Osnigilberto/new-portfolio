import './globals.css'
import { Analytics } from '@vercel/analytics/react'

export const metadata = {
  title: 'Osni Gilberto Ferreira Junior - Frontend Developer',
  description: 'Frontend Developer especializado em React, Next.js, Firebase e desenvolvimento mobile com Kotlin. Criando experiências digitais incríveis.',
  keywords: ['Frontend Developer', 'React', 'Next.js', 'JavaScript', 'Kotlin', 'Firebase', 'Web Developer', 'Mobile Developer'],
  authors: [{ name: 'Osni Gilberto Ferreira Junior' }],
  creator: 'Osni Gilberto Ferreira Junior',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://seu-dominio.com', // Substitua pelo seu domínio
    title: 'Osni Gilberto Ferreira Junior - Frontend Developer',
    description: 'Frontend Developer especializado em React, Next.js e desenvolvimento mobile',
    siteName: 'Osni Gilberto Portfolio',
    images: [
      {
        url: '/og-image.jpg', // Adicione uma imagem OG depois
        width: 1200,
        height: 630,
        alt: 'Osni Gilberto Ferreira Junior Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Osni Gilberto Ferreira Junior - Frontend Developer',
    description: 'Frontend Developer especializado em React, Next.js e desenvolvimento mobile',
    images: ['/og-image.jpg'], // Mesma imagem do OG
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
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Adicione outros meta tags se necessário */}
      </head>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  )
}