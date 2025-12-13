import { useRouter } from 'next/navigation'

type Props = {
  targetId: string
  hasLiked: string
}

export default function LikeButton({
  targetId,
  hasLiked
}: Props) {
  const router = useRouter()



  return (
    <div>LikeButton</div>
  )
}