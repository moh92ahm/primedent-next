import { Button, type ButtonProps } from '@/components/ui/button'
import { cn } from '@/utilities/ui'
import Link from 'next/link'
import React from 'react'


type CMSLinkType = {
  appearance?: 'inline' | ButtonProps['variant']
  children?: React.ReactNode
  className?: string
  label?: string | null
  newTab?: boolean | null
  href?: string | null
  size?: ButtonProps['size'] | null
  url?: string | null
}

export const CMSLink: React.FC<CMSLinkType> = (props) => {
  const {
    appearance = 'inline',
    children,
    className,
    label,
    newTab,
    href,
    size: sizeFromProps,
    url,
  } = props

  const linkHref = href || url
  if (!linkHref) return null

  const size = appearance === 'link' ? 'clear' : sizeFromProps
  const newTabProps = newTab ? { rel: 'noopener noreferrer', target: '_blank' } : {}

  /* Ensure we don't break any styles set by richText */
  if (appearance === 'inline') {
    return (
      <Link className={cn(className)} href={linkHref || ''} {...newTabProps}>
        {label && label}
        {children && children}
      </Link>
    )
  }

  return (
    <Button asChild className={className} size={size} variant={appearance}>
      <Link className={cn(className)} href={linkHref || ''} {...newTabProps}>
        {label && label}
        {children && children}
      </Link>
    </Button>
  )
}
