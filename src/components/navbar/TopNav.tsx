import { Button, Navbar, NavbarBrand, NavbarContent } from '@nextui-org/react'
import React from 'react'
import { LuBringToFront } from "react-icons/lu";
import Link from 'next/link';
import NavLink from './NavLink';

export default function TopNav() {
  return (
    <Navbar
        maxWidth='xl'
        className='bg-[#111]'
        classNames={{
            item: [
                'text-xl',
                'text-[#f5f5db]',
                'uppercase',
                'data-[active=true]:text-[#ff4500]'
            ]
        }}
    >
        <NavbarBrand as={Link} href='/'>
            <LuBringToFront size={40} className='text-[#f5f5dc]'/>
            <div className='text-3xl font-bold flex'>
                <span className='text-[#ff4500]'>Con</span>
                <span className='text-[#f5f5db]'>nex</span>
            </div>
        </NavbarBrand>
        <NavbarContent justify='center'>
            <NavLink href='/members' label='Members'/>
            <NavLink href='/lists' label='Lists'/>
            <NavLink href='/messages' label='Messages'/>
        </NavbarContent>
        <NavbarContent justify='end'> 
            <Button
                as={Link} href='/login' 
                variant='bordered' 
                className='text-[#f5f5db]'
            >
                Login
            </Button>
            <Button
                as={Link} href='/register' 
                variant='bordered' 
                className='text-[#f5f5db]'
            >
                Register
            </Button>
        </NavbarContent>
    </Navbar>

  )
}
