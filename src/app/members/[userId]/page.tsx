export default function MemberDetailedPage({
  params
}: {
  params: {userId: string}
}) {
  return (
    <div>{params.userId}</div>
  )
}