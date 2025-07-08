'use client'

import React from 'react'
import { AppLink } from '@/components/Link'
import type { NavItem } from '@/constants/navLinks'

interface Props {
  navItems: NavItem[]
}

export const HeaderNav: React.FC<Props> = ({ navItems }) => {
  return (
    <nav className="flex flex-col md:flex-row gap-3 space-y-8 md:space-y-0 items-center text-xl md:text-base">
      {navItems.map(({ link }, i) => (
        <AppLink key={i} href={link.url} variant="link">
          {link.label}
        </AppLink>
      ))}
    </nav>
  )
}
