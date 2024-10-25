import { Button, Navbar, NavbarBrand, NavbarContent, NavbarItem } from '@nextui-org/react'
import { TbDeviceGamepad3 } from 'react-icons/tb'
import React from 'react'
import Link from 'next/link'

export default function TopNav() {
  return (
    <Navbar
      maxWidth='xl'
      className='bg-[#111]'
      classNames={{
        item: [
          'text-xl',
          'text-white',
          'uppercase'
        ]
      }}
    >
      <NavbarBrand as={Link} href='/'>
        <TbDeviceGamepad3 size={40} color='white' />
        <div className='font-bold text-3xl text-[#ff4500] flex'>
          <span>Pro</span>
          <span>Gamers</span>
        </div>
      </NavbarBrand>
      <NavbarContent justify='center'>
        <NavbarItem as={Link} href='/members'>Members</NavbarItem>
        <NavbarItem as={Link} href='/lists'>Teams</NavbarItem>
        <NavbarItem as={Link} href='/messages'>Messages</NavbarItem>
      </NavbarContent>
      <NavbarContent justify='end'>
        <Button variant='bordered' className='text-[#fff] border-[#fff] hover:text-[#ff4500] hover:border-[#ff4500]'> Login</Button>
        <Button variant='bordered' className='text-[#fff] border-[#fff] hover:text-[#ff4500] hover:border-[#ff4500]'> Register</Button>
      </NavbarContent>
    </Navbar>
  )
}
