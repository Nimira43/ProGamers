import { toggleLikeMember } from '@/app/actions/likeActions'
import { useRouter } from 'next/navigation'

type Props = {
  targetId: string
  hasLiked: boolean
}

export default function LikeButton({
  targetId,
  hasLiked
}: Props) {
  const router = useRouter()

  async function toggleLike() {
    await toggleLikeMember(targetId, hasLiked)
    router.refresh()
  }

  return (
    <div>LikeButton</div>
  )
}