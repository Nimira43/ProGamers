import React from 'react'
import { getMembers } from '../actions/memberActions'

export default async function MembersPage() {
  const members = await getMembers()

  return (
    <div className='mt-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-8'>
      
        {members && members.map(member => (
          <li key={member.id}>
            {member.name}
          </li>
        ))}

    </div>
  )
}
