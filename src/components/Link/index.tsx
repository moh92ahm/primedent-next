import { Button, type ButtonProps } from '@/components/ui/button'
import { cn } from '@/utilities/ui'
import Link from 'next/link'
import React from 'react'

interface AppLinkProps {
  href: string
  className?: string
  children?: React.ReactNode
  variant?: ButtonProps['variant']
  size?: ButtonProps['size']
  newTab?: boolean
}

export const AppLink: React.FC<AppLinkProps> = ({
  href,
  className,
  children,
  variant,
  size,
  newTab,
}) => {
  const newTabProps = newTab ? { rel: 'noopener noreferrer', target: '_blank' } : {}

  if (!variant) {
    return (
      <Link className={cn(className)} href={href} {...newTabProps}>
        {children}
      </Link>
    )
  }

  return (
    <Button asChild className={className} size={size} variant={variant}>
      <Link className={cn(className)} href={href} {...newTabProps}>
        {children}
      </Link>
    </Button>
  )
}
