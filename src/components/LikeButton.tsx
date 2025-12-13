import { toggleLikeMember } from '@/app/actions/likeActions'
import { useRouter } from 'next/navigation'
import { GoThumbsup, GoThumbsdown } from 'react-icons/go'

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
    <div
      onClick={toggleLike}
      className='relative hover:opacity-80 transition cursor-pointer'
    >

    </div>
  )
}