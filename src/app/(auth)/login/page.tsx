import React from 'react'
import Link from 'next/link'

export default function LoginPage() {
  return (
    <div>
      <h3 className='text-3xl'>Login Page</h3>
      <Link href='/'>
        Home
      </Link>
    </div>
  )
}
