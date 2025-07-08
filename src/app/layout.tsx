import type { Metadata } from 'next'
import React from 'react'
import './globals.css'

import { cn } from '@/lib/utils'
import { Providers } from '@/providers'
import { InitTheme } from '@/providers/Theme/InitTheme'

import { Cormorant_Garamond } from 'next/font/google'
import { Montserrat } from 'next/font/google'


import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { draftMode } from 'next/headers'


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
  title: 'Primedent',
  description: 'Primedent - Your trusted partner in dental care.',
}

export default async function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const { isEnabled } = await draftMode()

  return (
    <html
      lang="en"
      data-theme="dark"
      suppressHydrationWarning
      className={cn(

        cormorant.variable,
        montserrat.variable
      )}
    >
      <head>
        <InitTheme />
        <link href="/Favicon.png" rel="icon" sizes="32x32" />
        <link href="/Favicon.png" rel="icon" type="image/svg+xml" />
      </head>
      <body className="bg-background text-foreground antialiased">
        <Providers>
          <Header />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  )
}
