'use client'

import { Card, CardHeader } from '@nextui-org/react'
import { ImConfused } from 'react-icons/im'

export default function Error({
  error,
  reset
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {

  return (
    <div className='flex items-center justify-center vertical-center'>
      <Card className='w-2/5 mx-auto'>
        <CardHeader className='flex flex-col items-center justify-center'>
          <div className='flex flex-col gap-2 itemce-center text-main'>
            <ImConfused size={30} />
            <h1 className='text-3xl font-medium'>
              Error!
            </h1>
          </div>
        </CardHeader>
      </Card>
      <h2>Something went wrong</h2>
      <button
        onClick={
          () => reset()   
        }
      >
        Try Again
      </button>
    </div>
  )
}

