import { Button } from '@nextui-org/react'
import React from 'react'
import { FaRegSmileBeam } from 'react-icons/fa'

export default function page() {
  return (
    <div>
      <h1>Soulz</h1>
      <Button color='primary' variant='bordered' startContent={<FaRegSmileBeam size={20}/>}>
        Submit
      </Button>
    </div>
  )
}

