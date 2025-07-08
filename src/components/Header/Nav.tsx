'use client'

import React from 'react'
import Link from 'next/link'
import { SearchIcon } from 'lucide-react'
import { CMSLink } from '@/components/Link'
import type { NavItem } from '@/constants/navLinks'

interface Props {
  navItems: NavItem[]
}

export const HeaderNav: React.FC<Props> = ({ navItems }) => {
  return (
    <nav className="flex flex-col md:flex-row gap-3 space-y-8 md:space-y-0 items-center text-xl md:text-base">
      {navItems.map(({ link }, i) => (
        <CMSLink key={i} {...link} appearance="link" />
      ))}
      <Link href="/search">
        <span className="sr-only">Search</span>
        <SearchIcon className="w-5 text-primary" />
      </Link>
    </nav>
  )
}
