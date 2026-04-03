'use client'

import { signOutUser } from '@/app/actions/authActions'
import { Avatar, Dropdown, DropdownItem, DropdownMenu, DropdownSection, DropdownTrigger } from '@nextui-org/react'
import Link from 'next/link'
import React from 'react'

type Props = {
  userInfo: {
    name: string | null
    image: string | null
  } | null
}

export default function UserMenu({userInfo}: Props) {
  return (
    <Dropdown placement='bottom-end'>
      <DropdownTrigger>
        <Avatar 
          isBordered
          as='button'
          className='transition-transform orange'
          name={userInfo?.name || 'user avatar'}
          size='sm'
          src={userInfo?.image || '/images/user.jpg'}
        />
      </DropdownTrigger>
      <DropdownMenu variant='flat'>
        <DropdownSection showDivider>
          <DropdownItem
            isReadOnly
            as='span'
            className='h-14 flex flex-row'
          >
            Signed in as {userInfo?.name}
          </DropdownItem>
        </DropdownSection>
        <DropdownItem 
          as={Link}
          href='/members/edit'
        >
          Edit Profile
        </DropdownItem>
        <DropdownItem 
          onClick={async () => signOutUser()}
        >
          Logout
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  )
}