import './globals.css'
import { Analytics } from '@vercel/analytics/react'

export const metadata = {
  title: 'Osni Gilberto Ferreira Junior - Web/Mobile Developer',
  description: 'Web and Mobile Developer specializing in React, Next.js, Kotlin, and Firebase. Building complete digital solutions from concept to deployment.',
  keywords: ['Web Developer', 'Mobile Developer', 'Full Stack Developer', 'React', 'Next.js', 'Kotlin', 'Firebase', 'Android', 'JavaScript', 'Portfolio'],
  authors: [{ name: 'Osni Gilberto Ferreira Junior' }],
  creator: 'Osni Gilberto Ferreira Junior',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://osniiferreira.vercel.app',
    title: 'Osni Gilberto Ferreira Junior - Web/Mobile Developer',
    description: 'Web and Mobile Developer building complete digital solutions with React, Next.js, and Kotlin',
    siteName: 'Osni Gilberto Portfolio',
    images: [
      {
        url: 'https://osniiferreira.vercel.app/ogf-icon.png',
        width: 1200,
        height: 1200,
        alt: 'Osni Gilberto Ferreira Junior - Web/Mobile Developer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Osni Gilberto Ferreira Junior - Web/Mobile Developer',
    description: 'Web and Mobile Developer building complete digital solutions',
    images: ['https://osniiferreira.vercel.app/ogf-icon.png'],
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