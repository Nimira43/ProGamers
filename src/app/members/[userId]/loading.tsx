import { Spinner } from "@nextui-org/react";

export default function oading() {
  return (
    <div className='flex justify-center items-center vertical-center'>
      <Spinner 
        label='Loading...'
        color='warning'
        labelColor='warning'
      />
    </div>
  )
}