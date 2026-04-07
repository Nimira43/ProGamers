import { getAuthUserId } from '@/app/actions/authActions'
import { getMemberByUserId, getMemberPhotosByUserId } from '@/app/actions/memberActions'
import ImageUploadButton from '@/components/imageUploadButton'
import DeleteButton from '@/components/navbar/DeleteButton'
import StarButton from '@/components/StarButton'
import { CardBody, CardHeader, Divider, Image } from '@nextui-org/react'
import MemberPhotoUpload from './MemberPhotoUpload'
import MemberImage from '@/components/MemberImage'
import MemberPhotos from '@/components/MemberPhotos'

export default async function PhotosPage() {
  const userId = await getAuthUserId()
  const member = await getMemberByUserId(userId)
  const photos = await getMemberPhotosByUserId(userId)

  return (
    <>
      <CardHeader className='flex flex-row justify-between items-center'>
        <div className='text-2xl font-medium text-main'>
          Upload Photos
        </div>
        <MemberPhotoUpload />
      </CardHeader>
      <Divider />
      <CardBody>
        
        <MemberPhotos 
          photos={photos}
          editing={true}
          mainImageUrl={member?.image}
        />
      </CardBody>
    </>
  )
}