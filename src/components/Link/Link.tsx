import NextLink from 'next/link'
import React from 'react'

export const Link = ({
  href,
  children,
  className,
}: {
  href: string
  children: React.ReactNode
  className?: string
}) => (
  <NextLink
    href={href}
    className={`text-primary dark:text-dark-primary underline underline-offset-2 hover:border-dotted decoration-1 ${className}`}>
    {children}
  </NextLink>
)
