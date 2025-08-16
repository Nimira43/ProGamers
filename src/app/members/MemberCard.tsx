import { Card, Image } from '@nextui-org/react'
import { Member } from '@prisma/client'

type Props = {
  member: Member
}

export default function MemberCard({member}: Props) {
  return (
    <Card fullWidth>
      <Image 
        isZoomed
        alt={member.name}
        width={300}
        src={member.image || '/images/user.png'}
        className='aspect-square object-cover'
      />
    </Card>
  )
}