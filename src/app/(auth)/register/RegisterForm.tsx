'use client'

import { registerUser } from '@/app/actions/authActions'
import { RegisterSchema, registerSchema } from '@/lib/schemas/registerSchema'
import { handleFormServerErrors } from '@/lib/util'
import { zodResolver } from '@hookform/resolvers/zod'
import { Button, Card, CardBody, CardHeader, Input} from '@nextui-org/react'
import { useForm } from 'react-hook-form'
import { RiLockLine } from 'react-icons/ri'

export default function RegisterForm() {
  const { register, handleSubmit, setError, formState: {errors, isValid, isSubmitting} } = useForm<RegisterSchema>({
    resolver: zodResolver(registerSchema),
    mode: 'onTouched'
  })

  const onSubmit = async (data: RegisterSchema) => {
    const result = await registerUser(data)
    if (result.status === 'success') {
      console.log('User registered successfully.')
    } else {
      handleFormServerErrors(result, setError)
    }
  }

  return (
    <Card className='w-2/5 mx-auto font'>
      <CardHeader className='flex flex-col items-center justify-center'>
        <div className='flex flex-col gap-2 items-center'>
          <div className='flex flex-row items-center gap-3'>
            <RiLockLine size={30} className='text-main'/>
            <h1 className='text-3xl font-semibold uppercase'>Register</h1>
          </div>
          <p className='text-dark text-center'>Welcome to ProGamers</p>         
        </div>
      </CardHeader>
      <CardBody>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className='space-y-4'>
            <Input 
              defaultValue=''
              label='Name'
              variant='bordered'
              {...register('name')}
              isInvalid={!!errors.name}
              errorMessage={errors.name?.message}
            />
            <Input 
              defaultValue=''
              label='Email'
              variant='bordered'
              {...register('email')}
              isInvalid={!!errors.email}
              errorMessage={errors.email?.message}
            />
            <Input 
              defaultValue=''
              label='Password'
              variant='bordered'
              type='password'
              {...register('password')}
              isInvalid={!!errors.password}
              errorMessage={errors.password?.message}
            />
            {errors.root?.serverError && (
              <p className='text-main text-sm'>
                {errors.root.serverError.message}
              </p>
            )}
            <Button 
              isLoading={isSubmitting}
              isDisabled={!isValid}
              fullWidth
              type='submit'
              className='btn'
            >
              Register
            </Button>
          </div>
        </form>
      </CardBody>
    </Card>
  )
}
