import { CardHeader, Divider, CardBody } from '@nextui-org/react'

export default function ChatPage() {
  return (
    <>
      <CardHeader className='text-2xl font-medium text-main'>
        Chat
      </CardHeader>
      <Divider />
      <CardBody>
        Members chat
      </CardBody>
    </>
  )
}