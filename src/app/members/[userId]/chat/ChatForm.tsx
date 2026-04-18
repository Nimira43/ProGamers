'use client'

import { messageSchema, MessageSchema } from '@/lib/schemas/messageSchema'
import { zodResolver } from '@hookform/resolvers/zod'
import { Button, Input } from '@nextui-org/react'
import { useForm } from 'react-hook-form'
import { TbSend2 } from 'react-icons/tb'

export default function ChatForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: {
      isSubmitting,
      isValid,
      errors
    }
  } = useForm<MessageSchema>({
    resolver: zodResolver(messageSchema)
  })

  const onSubmit = (data: MessageSchema) => {
    console.log(data)
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className='w-full flex items-center gap-2'
    >
      <Input
        fullWidth
        placeholder='Message...'
        variant='faded'
        {...register('text')}
        isInvalid={!!errors.text}
        errorMessage={errors.text?.message}
      />
      <Button
        type='submit'
        isIconOnly
        radius='full'
        isLoading={isSubmitting}
        isDisabled={!isValid || isSubmitting}
        className='bg-main text-light'
      >
        <TbSend2  size={18} />
      </Button>
    </form>
  )
}