import NextLink from 'next/link'
import React from 'react'

export const LinkButton = ({
  href,
  children,
  className,
  newTab = false,
}: {
  href: string
  children: React.ReactNode
  className?: string
  newTab?: boolean
}) => (
  <NextLink
    href={href}
    className={`flex w-auto flex-grow-0 text-primary dark:text-dark-primary underline underline-offset-2 decoration-1 ${className}`}
    target={newTab ? '_blank' : '_self'}>
    {children}
  </NextLink>
)
