import { calculateAge } from '@/lib/util'
import { Card, CardBody, Divider, Image } from '@nextui-org/react'
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
      name: 'Chat',
      href: `${basePath}/chat`
    }
  ]
  
  return (
    <Card
      className='w-full mt-10 items-center h-[80vh]'  
    >
      <Image 
        height={200}
        width={200}
        src={member.image || '/images/user.png'}
        alt='User Profile Image'
        className='rounded-full mt-6 aspect-square object-cover'
      />
      <CardBody>
        <div className='flex flex-col items-center'>
          <div className='text-2xl'>
            {member.name}, {calculateAge(member.dateOfBirth)}
          </div>
          <div className='text-sm text-grey-dark'>
            {member.city}, {member.country}
          </div>
        </div>
        <Divider className='my-3' />
        
      </CardBody>

    </Card>
  )
}