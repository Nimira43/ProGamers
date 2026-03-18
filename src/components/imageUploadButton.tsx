'use client'

import {CldUploadButton} from 'next-cloudinary'

export default function ImageUploadButton() {
  return (
    <CldUploadButton
      options={{maxFiles: 1}}
      onSuccess={(res) => console.log(res)}
      signatureEndpoint='/api/sign-image'
      uploadPreset='apollo'
      className='btn text-sm py-2 px-4 hover:opacity-80 transitioning'
    >
      Upload New Image
    </CldUploadButton>
  )
}