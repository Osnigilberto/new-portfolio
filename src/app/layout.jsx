import './globals.css'
import { Analytics } from '@vercel/analytics/react'

export const metadata = {
  title: 'Osni Gilberto Ferreira Junior - Frontend Developer',
  description: 'Frontend Developer specializing in React, Next.js, Firebase and mobile development with Kotlin. Creating amazing digital experiences.',
  keywords: ['Frontend Developer', 'React', 'Next.js', 'JavaScript', 'Kotlin', 'Firebase', 'Web Developer', 'Mobile Developer', 'Portfolio'],
  authors: [{ name: 'Osni Gilberto Ferreira Junior' }],
  creator: 'Osni Gilberto Ferreira Junior',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://osniiferreira.vercel.app',
    title: 'Osni Gilberto Ferreira Junior - Frontend Developer',
    description: 'Frontend Developer specializing in React, Next.js and mobile development',
    siteName: 'Osni Gilberto Portfolio',
    images: [
      {
        url: 'https://osniiferreira.vercel.app/icon.png',
        width: 1200,
        height: 1200,
        alt: 'Osni Gilberto Ferreira Junior - Frontend Developer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Osni Gilberto Ferreira Junior - Frontend Developer',
    description: 'Frontend Developer specializing in React, Next.js and mobile development',
    images: ['https://osniiferreira.vercel.app/icon.png'],
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
  // TODO: Adicionar amanhã após configurar o Google Search Console
  // verification: {
  //   google: 'SEU_CODIGO_AQUI',
  // },
  alternates: {
    canonical: 'https://osniiferreira.vercel.app',
    languages: {
      'en-US': 'https://osniiferreira.vercel.app',
    },
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  )
}