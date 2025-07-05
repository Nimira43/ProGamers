import { Avatar, Dropdown, DropdownMenu, DropdownSection, DropdownTrigger } from '@nextui-org/react'
import { Session } from 'next-auth'

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
          className='transition-transform'
          color='secondary'
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

        </DropdownSection>
      </DropdownMenu>
    </Dropdown>
  )
}