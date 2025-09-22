'use client'

import { NavbarItem } from '@nextui-org/react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

type NavLinkProps = {
  href: string
  label: string
}

export default function NavLink({href, label}: NavLinkProps) {
  const pathName = usePathname()
  return (
    <NavbarItem 
      isActive={pathName === href} 
      as={Link} 
      href={href}
      className='text-light hover:text-main link-transition'
    >
      {label}
    </NavbarItem>
  )
}
