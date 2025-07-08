import './globals.css'
import type { Metadata } from 'next'
import { Cormorant_Garamond, Montserrat } from 'next/font/google'
import { cn } from '@/lib/utils'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'

import { InitTheme } from '@/providers/Theme/InitTheme'

import { Providers } from '@/providers'

import React from 'react'

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-cormorant',
  display: 'swap',
})

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Primedent | Home',
  description: 'Top quality dental care at Primedent Clinics.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      data-theme="dark"
      className={cn(
        cormorant.variable,
        montserrat.variable,
      )}
      lang="en"
      suppressHydrationWarning
    >
      <head>
        <InitTheme />
        <link href="/Favicon.png" rel="icon" sizes="32x32" />
        <link href="/Favicon.png" rel="icon" type="image/svg+xml" />
      </head>
      <body className='bg-background text-foreground antialiased min-h-screen flex flex-col'>
        <Providers>
          <Header />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  )
}
