import React from 'react'
import Link from 'next/link'
import { getMembers } from '../actions/memberActions'

export default async function MembersPage() {
  const members = await getMembers()

  return (
    <div>
      <h3 className='text-3xl'>Members Page</h3>
      <Link href='/'>
        Home
      </Link>
    </div>
  )
}
