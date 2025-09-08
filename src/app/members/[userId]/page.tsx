import { getMemberByUserId } from '@/app/actions/memberActions'

export default async function MemberDetailedPage({
  params
}: {
  params: {userId: string}
}) {
  const member = await getMemberByUserId(params.userId)

  return (
    <div>{params.userId}</div>
  )
}