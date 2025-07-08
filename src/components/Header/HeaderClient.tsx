'use client'
import { useHeaderTheme } from '@/providers/HeaderTheme'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useEffect, useState } from 'react'

import { Logo } from '@/components/Logo/Logo'
import { HeaderNav } from './Nav'
import { NAV_LINKS } from '@/constants/navLinks'

// Shadcn UI
import { Sheet, SheetTrigger, SheetContent } from '@/components/ui/sheet'
import { Menu } from 'lucide-react'

export const HeaderClient: React.FC = () => {
  /* Storing the value in a useState to avoid hydration errors */
  const [theme, setTheme] = useState<string | null>(null)
  const { headerTheme, setHeaderTheme } = useHeaderTheme()
  const pathname = usePathname()

  useEffect(() => {
    setHeaderTheme(null)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname])

  useEffect(() => {
    if (headerTheme && headerTheme !== theme) setTheme(headerTheme)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [headerTheme])

  return (
    <header className="container relative z-20 max-w-screen-xl" {...(theme ? { 'data-theme': theme } : {})}>
      <div className="py-8 flex justify-between">
        <Link href="/">
          <Logo loading="eager" priority="high" className="invert dark:invert-0" />
        </Link>
        {/* Desktop Nav */}
        <div className="hidden md:block">
          <HeaderNav navItems={NAV_LINKS} />
        </div>

        {/* Mobile Nav */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger className="focus:outline-none">
              <Menu className="w-6 h-6" />
            </SheetTrigger>

            <SheetContent side="left" className="pt-10 flex flex-col">
              <HeaderNav navItems={NAV_LINKS} />
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
