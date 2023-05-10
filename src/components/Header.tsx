'use client'

import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { ReactNode } from 'react'

import logo from 'assets/logo.svg'
import clsx from 'clsx'

const NavLink = ({ children, href }: { children: ReactNode; href: string }) => {
  const pathname = usePathname()

  return (
    <Link href={href} className={pathname === href ? 'p-1 underline' : ''}>
      {children}
    </Link>
  )
}

export function Header({ className }: { className?: string }) {
  return (
    <header className={clsx('flex flex-row items-center justify-center bg-pk-yellow', className)}>
      <nav className='flex max-w-4xl flex-1 flex-row items-center'>
        <Image src={logo} width={157} height={63} alt='logo' className='mx-20' />
        <ul className='flex flex-1 flex-row justify-evenly text-black'>
          <li>
            <NavLink href='/'>Home</NavLink>
          </li>
          <li>
            <NavLink href='/pokedex'>Pokédex</NavLink>
          </li>
          <li>
            <NavLink href='/legendaries'>Legendaries</NavLink>
          </li>
          <li>
            <NavLink href='/documentation'>Documentation</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  )
}
