'use client'

import { signInUser } from '@/app/actions/authActions'
import { loginSchema, LoginSchema } from '@/lib/schemas/loginSchema'
import { zodResolver } from '@hookform/resolvers/zod'
import { Button, Card, CardBody, CardHeader, Input } from '@nextui-org/react'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'
import { RiLockLine } from 'react-icons/ri'
import { toast } from 'react-toastify'

export default function LoginForm() {
  const router = useRouter()
  
  const {
    register,
    handleSubmit,
    formState: {
      errors,
      isValid,
      isSubmitting
    }
  } = useForm<LoginSchema>({
    resolver: zodResolver(loginSchema),
    mode: 'onTouched'
  })

  const onSubmit = async (data: LoginSchema) => {
    const result = await signInUser(data)
    if (result.status === 'success') {
      router.push('/members')
    } else {
      toast.error(result.error as string)
    }
  }

  return (
    <Card className='w-2/5 mx-auto font'>
      <CardHeader className='flex flex-col items-center justify-center'>
        <div className='flex flex-col gap-2 items-center'>
          <div className='flex flex-row items-center gap-3'>
            <RiLockLine size={30} className='text-main'/>
            <h1 className='text-3xl font-semibold uppercase'>Login</h1>
          </div>
          <p className='text-dark text-center'>Welcome back to ProGamers</p>         
        </div>
      </CardHeader>
      <CardBody>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className='space-y-4'>
            <Input 
              defaultValue=''
              label='Email'
              variant='bordered'
              {...register('email')}
              isInvalid={!!errors.email}
              errorMessage={errors.email?.message as string}
            />
            <Input 
              defaultValue=''
              label='Password'
              variant='bordered'
              type='password'
              {...register('password')}
              isInvalid={!!errors.password}
              errorMessage={errors.password?.message as string}
            />
            <Button 
              isLoading = {isSubmitting}
              isDisabled={!isValid}
              fullWidth 
              type='submit'
              className='bg-dark text-opacity-100 text-light font-medium uppercase tracking-wide'
            >
              Login
            </Button>
          </div>
        </form>
      </CardBody>
    </Card>
  )
}
