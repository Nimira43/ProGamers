import { registerSchema, RegisterSchema } from '@/lib/schemas/registerSchema'
import { zodResolver } from '@hookform/resolvers/zod'
import { Button, Card, CardBody, CardHeader} from '@nextui-org/react'
import { useForm } from 'react-hook-form'
import { RiLockLine } from 'react-icons/ri'

export default function RegisterForm() {
  const { register, handleSubmit, formState: {errors, isValid} } = useForm<RegisterSchema>({
    resolver: zodResolver(registerSchema),
    mode: 'onTouched'
  })

  const onSubmit = (data: RegisterSchema) => {
    console.log(data)
  }

  return (
    <Card className='w-2/5 mx-auto font'>
      <CardHeader className='flex flex-col items-center justify-center'>
        <div className='flex flex-col gap-2 items-center'>
          <div className='flex flex-row items-center gap-3'>
            <RiLockLine size={30} className='text-[#ff4500]'/>
            <h1 className='text-3xl font-semibold uppercase'>Login</h1>
          </div>
          <p className='text-[#111] text-center'>Welcome back to ProGamers</p>         
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
              isDisabled={!isValid}
              fullWidth
              type='submit'
              className='bg-[#111] text-opacity-100 text-[#fffaf0] font-semibold uppercase tracking-wide'
            >
              Submit
            </Button>
          </div>
        </form>
      </CardBody>
    </Card>
  )
}
