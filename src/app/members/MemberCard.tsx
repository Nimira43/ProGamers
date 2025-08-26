import { Card, CardFooter, Image } from '@nextui-org/react'
import { Member } from '@prisma/client'
import Link from 'next/link'

type Props = {
  member: Member
}

export default function MemberCard({member}: Props) {
  return (
    <Card 
      fullWidth
      as={Link}
      href={`/members/${member.userId}`}
    
    >
      <Image 
        isZoomed
        alt={member.name}
        width={300}
        src={member.image || '/images/user.png'}
        className='aspect-square object-cover'
      />
      <CardFooter 
        className='flex justify-start bg-dark bg-dark-gradient overflow-hidden absolute bottom-0 z-10'
      >
        <div className='flex flex-col text-light'>
          <span className='font-medium'>{member.name}</span>
          <span className='text-sm'>{member.city}</span>
        </div>
      </CardFooter>
    </Card>
  )
}