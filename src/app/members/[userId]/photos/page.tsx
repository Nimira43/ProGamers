import { CardHeader, Divider, CardBody } from '@nextui-org/react'

export default function PhotosPage() {
  return (
    <>
      <CardHeader className='text-2xl font-medium text-main'>
        Photos
      </CardHeader>
      <Divider />
      <CardBody>
        Members photos
      </CardBody>
    </>
  )
}