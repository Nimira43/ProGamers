import { Navbar, NavbarBrand, NavbarContent, NavbarItem } from '@nextui-org/react'
import { TbDeviceGamepad3 } from 'react-icons/tb'
import React from 'react'

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
      <NavbarBrand>
        <TbDeviceGamepad3 size={40} color='white' />
        <div className='font-bold text-3xl text-[#ff4500] flex'>
          <span>Pro</span>
          <span>Gamers</span>
        </div>
      </NavbarBrand>
      <NavbarContent justify='center'>
        <NavbarItem>Gamers</NavbarItem>
      </NavbarContent>
      <NavbarContent justify='end'>
        Right
      </NavbarContent>
    </Navbar>
  )
}
