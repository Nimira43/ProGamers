'use client'

import { Card } from "@nextui-org/react"

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

