import { Dropdown } from '@nextui-org/react'
import { Session } from 'next-auth'

type Props = {
  user: Session['user']
}

export default function UserMenu({user}: Props) {
  return (
    <Dropdown>
      
    </Dropdown>
  )
}