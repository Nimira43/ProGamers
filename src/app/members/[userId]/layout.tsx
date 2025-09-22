import { ReactNode } from 'react'

export default function Layout({
  children, 
  params
}:{
  children: ReactNode,
  params: {userId: string}
}) {
  return (
    <div>layout</div>
  )
}