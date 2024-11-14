import { Button, Navbar, NavbarBrand, NavbarContent} from '@nextui-org/react'
import { TbDeviceGamepad3 } from 'react-icons/tb'
import React from 'react'
import Link from 'next/link'
import NavLink from './NavLink'

export default function TopNav() {
  return (
    <Navbar
      maxWidth='xl'
      className='bg-[#111]'
      classNames={{
        item: [
          'text-xl',
          'text-[#fff]',
          'uppercase',
          'data-[active=true]:text-[#ff4500]'
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
        <NavLink href='/members' label='Members' />
        <NavLink href='/teams' label='Teams' />
        <NavLink href='/messages' label='Messages' />
      </NavbarContent>
      <NavbarContent justify='end'>
        <Button 
          as={Link}
          href='/login'
          variant='bordered' 
          className='text-[#fff] border-[#fff] hover:text-[#ff4500] hover:border-[#ff4500]'
        > 
          Login
        </Button>
        <Button
          as={Link}
          href='/register' 
          variant='bordered' 
          className='text-[#fff] border-[#fff] hover:text-[#ff4500] hover:border-[#ff4500]'
        > 
          Register
        </Button>
      </NavbarContent>
    </Navbar>
  )
}
