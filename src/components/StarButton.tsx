import { AiFillStar, AiOutlineStar } from 'react-icons/ai'
import { PiSpinnerGap } from 'react-icons/pi'

type Props = {
  selected: boolean
  loading: boolean
}

export default function StarButton({ selected, loading }: Props) {
  return (
    <div className='relative flex items-center justify-center w-10 h-10 rounded-full bg-dark/70 hover:bg-dark/90 transitioning cursor-pointer'>
      {!loading ? (
        selected ? (
          <AiFillStar size={28} className='fill-main' />
        ) : (
          <AiOutlineStar size={28} className='fill-grey-light' />
        )
      ) : (
        <PiSpinnerGap size={28} className='fill-main animate-spin' />
      )}
    </div>
  )
}
