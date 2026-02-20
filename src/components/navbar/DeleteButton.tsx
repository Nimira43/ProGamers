import { AiFillDelete, AiOutlineDelete } from 'react-icons/ai'
import { PiSpinnerGap } from 'react-icons/pi'

type Props = {
  loading: boolean
}

export default function DeleteButton({ loading }: Props) {
  return (
    <div className='relative flex items-center justify-center w-10 h-10 rounded-full bg-dark/70 hover:bg-dark/90 transitioning cursor-pointer'>
      {!loading ? (
        <AiFillDelete size={28} className='fill-main' />
      ) : (
        <PiSpinnerGap size={28} className='fill-main animate-spin' />
      )}
    </div>
  )
}
