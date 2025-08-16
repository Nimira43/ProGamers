import { Member } from '@prisma/client'

type Props = {
  member: Member
}

export default function MemberCard({member}: Props) {
  return (
    <div>MemberCard</div>
  )
}