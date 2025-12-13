import { toggleLikeMember } from '@/app/actions/likeActions'
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

  async function toggleLike() {
    await toggleLikeMember(targetId, hasLiked)
  }

  return (
    <div>LikeButton</div>
  )
}