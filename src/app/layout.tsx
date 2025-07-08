// app/layout.tsx

import type { Metadata } from 'next'
import './globals.css'

import { Cormorant_Garamond, Montserrat } from 'next/font/google'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'

// Load fonts as CSS variables for Tailwind
const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-cormorant',
  display: 'swap',
})

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-montserrat',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Primedent Clinics',
  description: 'A modern dental experience with advanced care and comfort in Turkey.',
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${montserrat.variable}`}>
      <body className="bg-[--brand-background] text-[--brand-white] antialiased font-body">
        <Header />
        <main className="min-h-screen px-4 md:px-8 lg:px-16">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
