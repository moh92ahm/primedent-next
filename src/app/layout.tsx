// app/layout.tsx

import type { Metadata } from 'next'
import React from 'react'
import './globals.css'

import { Cormorant_Garamond, Montserrat } from 'next/font/google'

import { cn } from '@/utilities/ui'


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
        <link href="/Favicon.png" rel="icon" sizes="32x32" />
        <link href="/Favicon.png" rel="icon" type="image/svg+xml" />
      </head>
      <body className="bg-background text-foreground antialiased">
          <Header />
          {children}
          <Footer />
      </body>
    </html>
  )
}
