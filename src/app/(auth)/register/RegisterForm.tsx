'use client'

import { registerUser } from '@/app/actions/authActions'
import { RegisterSchema } from '@/lib/schemas/registerSchema'
import { Button, Card, CardBody, CardHeader, Input} from '@nextui-org/react'
import { useForm } from 'react-hook-form'
import { RiLockLine } from 'react-icons/ri'

export default function RegisterForm() {
  const { register, handleSubmit, setError, formState: {errors, isValid} } = useForm<RegisterSchema>({
    // resolver: zodResolver(registerSchema),
    mode: 'onTouched'
  })

  const onSubmit = async (data: RegisterSchema) => {
    const result = await registerUser(data)
    if (result.status === 'success') {
      console.log('User registered successfully.')
    } else {
      if (Array.isArray(result.error)) {
        result.error.forEach((e) => {
          const fieldName = e.path.join('.') as 'email' | 'name' | 'password'
          setError(fieldName, {message: e.message})
        })
      } else {
        setError('root.serverError', {message: result.error })
      }
    }
  }

  return (
    <Card className='w-2/5 mx-auto font'>
      <CardHeader className='flex flex-col items-center justify-center'>
        <div className='flex flex-col gap-2 items-center'>
          <div className='flex flex-row items-center gap-3'>
            <RiLockLine size={30} className='text-[#ff4500]'/>
            <h1 className='text-3xl font-semibold uppercase'>Register</h1>
          </div>
          <p className='text-[#111] text-center'>Welcome to ProGamers</p>         
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
            <Button 
              isDisabled={!isValid}
              fullWidth
              type='submit'
              className='bg-[#111] text-opacity-100 text-[#fffaf0] font-semibold uppercase tracking-wide'
            >
              Register
            </Button>
          </div>
        </form>
      </CardBody>
    </Card>
  )
}
