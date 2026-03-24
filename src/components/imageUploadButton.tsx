'use client'

import {CldUploadButton, CloudinaryUploadWidgetResults} from 'next-cloudinary'

type Props = {
  onUploadImage: (result: CloudinaryUploadWidgetResults) => void
}

export default function ImageUploadButton({
  onUploadImage
}: Props) {
  return (
    <CldUploadButton
      options={{maxFiles: 1}}
      onSuccess={onUploadImage}
      signatureEndpoint='/api/sign-image'
      uploadPreset='apollo'
      className='btn text-sm py-2 px-4 hover:opacity-80 transitioning'
    >
      Upload New Image
    </CldUploadButton>
  )
}