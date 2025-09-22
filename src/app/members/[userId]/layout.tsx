import { getMemberByUserId } from '@/app/actions/memberActions'
import { ReactNode } from 'react'

export default async function Layout({
  children, 
  params
}:{
  children: ReactNode,
  params: {userId: string}
}) {
  const member = await getMemberByUserId(params.userId)

  return (
    <div>layout</div>
  )
}