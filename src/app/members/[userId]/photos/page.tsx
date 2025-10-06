import { getMemberPhotosByUserId } from '@/app/actions/memberActions'
import { CardHeader, Divider, CardBody } from '@nextui-org/react'

export default async function PhotosPage({
  params
}: {
  params: { userId: string}
}) {
  const photos = await getMemberPhotosByUserId(params.userId)

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