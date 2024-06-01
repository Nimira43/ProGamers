import { Navbar, NavbarBrand, NavbarContent } from '@nextui-org/react'
import React from 'react'
import { LuBringToFront } from "react-icons/lu";

export default function TopNav() {
  return (
    <Navbar>
        <NavbarBrand>
            <LuBringToFront size={40}/>
            <div>
                <span>Con</span>
                <span>nex</span>
            </div>
        </NavbarBrand>
        <NavbarContent justify='center'>
            <p>Center</p>
        </NavbarContent>
        <NavbarContent justify='end'> 
            <p>End</p>
        </NavbarContent>
    </Navbar>

  )
}
