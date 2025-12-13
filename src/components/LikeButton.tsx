import { toggleLikeMember } from '@/app/actions/likeActions'
import { useRouter } from 'next/navigation'
import { BsHandThumbsUpFill, BsHandThumbsUp } from 'react-icons/bs'

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
      className='relative hover:opacity-80 link-transition cursor-pointer'
    >
      <BsHandThumbsUp
        size={28}
        className='fill- absolute -top-[2px] -right-[2px]'
      />
      <BsHandThumbsUpFill
        size={24}
        className={hasLiked
          ? 'fill-main'
          : 'fill-grey-light'
        }
      />
    </div>
  )
}