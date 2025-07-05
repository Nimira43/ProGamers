import { Avatar, Dropdown, DropdownTrigger } from '@nextui-org/react'
import { Session } from 'next-auth'

type Props = {
  user: Session['user']
}

export default function UserMenu({user}: Props) {
  return (
    <Dropdown placement='bottom-end'>
      <DropdownTrigger>
        <Avatar></Avatar>
      </DropdownTrigger>
    </Dropdown>
  )
}