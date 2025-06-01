import { Button } from '@nextui-org/react'
import Link from 'next/link'
import React from 'react'
import { MdOutlineGames } from "react-icons/md"

export default function page() {
  return (
    <div>
      <h1>Welcome to ProGamers</h1>

      <Button
        className='btn'
        as={Link}
        href='/members'
        // color='primary'
        // variant='bordered'
        startContent={<MdOutlineGames size={20} />}
      >
        Play
      </Button>
    </div>
  )
}

