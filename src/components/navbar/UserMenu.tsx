import { Session } from 'next-auth'

type Props = {
  user: Session['user']
}

export default function UserMenu() {
  return (
    <div>UserMenu</div>
  )
}