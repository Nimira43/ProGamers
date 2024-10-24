import { Button } from '@nextui-org/react'
import React from 'react'
import { FaRegSmileBeam } from 'react-icons/fa'
import Link from 'next/link'

export default function page() {
  return (
    <div>
      <h1>Soulz</h1>
      <Button
        as={Link}
        href='/members' 
        color='primary' 
        variant='bordered' 
        startContent={<FaRegSmileBeam size={20} />}
      >
        Submit
      </Button>
    </div>
  )
}

