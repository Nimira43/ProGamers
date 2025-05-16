import { Button, Navbar, NavbarBrand, NavbarContent} from '@nextui-org/react'
import { TbDeviceGamepad3 } from 'react-icons/tb'
import React from 'react'
import Link from 'next/link'
import NavLink from './NavLink'

export default function TopNav() {
  return (
    <Navbar
      maxWidth='xl'
      className='bg-dark'
      classNames={{
        item: [
          'text-xl',
          'text-light',
          'uppercase',
          'data-[active=true]:text-main'
        ]
      }}
    >
      <NavbarBrand as={Link} href='/'>
        <TbDeviceGamepad3 size={40} color='white' />
        <div className='font-bold text-3xl text-main flex'>
          <span className='logo font-bold tracking-wider pl-2'>ProGamers</span>
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
          className='uppercase text-light border-light hover:text-main hover:border-main'
        > 
          Login
        </Button>
        <Button
          as={Link}
          href='/register' 
          variant='bordered' 
          className='uppercase text-light border-light hover:text-main hover:border-main'
        > 
          Register
        </Button>
      </NavbarContent>
    </Navbar>
  )
}
