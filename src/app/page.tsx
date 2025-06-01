import { Button } from '@nextui-org/react'
import Link from 'next/link'
import React from 'react'
import { MdOutlineGames } from "react-icons/md"

export default async function Home() {

  

  return (
    <div className='m-20'>
      <h1 className='text-4xl mb-5'>Welcome to ProGamers</h1>
      <h3 className='text-2xl text-main uppercase font-medium mb-5'>User Session Data</h3>
      <Button
        className='btn'
        as={Link}
        href='/members'
        startContent={<MdOutlineGames size={20} />}
      >
        Play
      </Button>
    </div>
  )
}

