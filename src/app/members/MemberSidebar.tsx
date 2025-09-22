import { Member } from '@prisma/client'

type Props = {
  member: Member
}

export default function MemberSidebar({member}: Props) {
  const basePath = `/members/${member.userId}`
  
  const navLinks = [
    {
      name: 'Profile',
      href: `${basePath}`
    },
    {
      name: 'Photos',
      href: `${basePath}/photos`
    },
    {
      name: 'Profile',
      href: `${basePath}/chat`
    }
  ]
  
  return (
    <div>MemberSidebar</div>
  )
}