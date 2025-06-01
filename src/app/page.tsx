import { auth, signOut } from '@/auth'
import { Button } from '@nextui-org/react'
import Link from 'next/link'
import React from 'react'
import { MdOutlineGames } from "react-icons/md"

export default async function Home() {
  const session = await auth()

  return (
    <div className='m-20'>
      <h1 className='text-4xl mb-5'>Welcome to ProGamers</h1>
      <h3 className='text-2xl text-main uppercase font-medium mb-5'>User Session Data</h3>
      {session ? (
        <div>
          <pre>
            {JSON.stringify(session, null, 2)}
          </pre>
          <form action={async () => {
            'use server'
            await signOut()
          }}>
            <Button
              className='mt-5 btn'
              type='submit'
              startContent={<MdOutlineGames size={20} />}
            >
              Sign Out
            </Button>
          </form>
        </div>
      ) : (
        <div>Not Signed In</div>
      )}
    </div>
  )
}

