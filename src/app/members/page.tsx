import React from 'react'
import Link from 'next/link'

export default async function MembersPage() {
  return (
    <div>
      <h3 className='text-3xl'>Members Page</h3>
      <Link href='/'>
        Home
      </Link>
    </div>
  )
}
