'use client'

import { Button, Card, CardBody, CardFooter, CardHeader } from '@nextui-org/react'
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
          <div className='flex flex-col gap-2 items-center text-main'>
            <ImConfused size={30} />
            <h1 className='text-3xl font-medium uppercase'>
              Error
            </h1>
          </div>
        </CardHeader>
        <CardBody>
          <div className='flex justify-center text-dark'>
            <h2>{error.message}</h2>
          </div>
        </CardBody>
        <CardFooter className='flex justify-center'>
          <Button 
            className='bg-dark text-light uppercase'
            onClick={
              () => reset()
            }
          >
            Try Again
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}

