'use client'

// import { signOut } from 'next-auth/react'
// import { signOut } from '@/auth'
import { Avatar, Dropdown, DropdownItem, DropdownMenu, DropdownSection, DropdownTrigger } from '@nextui-org/react'
import { Session } from 'next-auth'
import Link from 'next/link'
import React from 'react'

type Props = {
  user: Session['user']
}

export default function UserMenu({user}: Props) {
  return (
    <Dropdown placement='bottom-end'>
      <DropdownTrigger>
        <Avatar 
          isBordered
          as='button'
          className='transition-transform orange'
          // color='second
          // ry'
          name={user?.name || 'user avatar'}
          size='sm'
          src={user?.image || '/images/user.png'}
        />
      </DropdownTrigger>
      <DropdownMenu
        variant='flat'
        aria-label='User actions menu'      
      >
        <DropdownSection showDivider>
          <DropdownItem
            isReadOnly
            as='span'
            className='h-14 flex flex-row'
            aria-label='Username'
          >
            Signed in as {user?.name}
          </DropdownItem>
        </DropdownSection>
        <DropdownItem 
          as={Link}
          href='/members/edit'
        >
          Edit Profile
        </DropdownItem>
        {/* <DropdownItem
          color='danger' 
          as={Link}
          onClick={async () => signOut()}
        >
          Logout
        </DropdownItem> */}
      </DropdownMenu>
    </Dropdown>
  )
}