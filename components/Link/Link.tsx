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
    className={`flex w-auto flex-grow-0 text-primary underline underline-offset-2 decoration-1 ${className}`}>
    {children}
  </NextLink>
)
