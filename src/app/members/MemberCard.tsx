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
      />
    </Card>
  )
}