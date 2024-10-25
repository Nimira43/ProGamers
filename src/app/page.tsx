import { Button } from '@nextui-org/react'
import React from 'react'
import { FaRegSmileBeam } from 'react-icons/fa'
import Link from 'next/link'

export default function page() {
  return (
    <div>
      <h1>ProGamers Home Page</h1>
      <Button
        className='border-[#ff4500] text-[#111]'
        as={Link}
        href='/members' 
        color='primary' 
        variant='bordered' 
        startContent={<FaRegSmileBeam size={20} className='text-[#111]'/>}
      >
        Submit
      </Button>
    </div>
  )
}

