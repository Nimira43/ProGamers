import { Button, Card, CardBody, CardHeader, Input } from '@nextui-org/react'
import { RiLockLine } from 'react-icons/ri'

export default function LoginForm() {
  return (
    <Card className='w-2/5 mx-auto'>
      <CardHeader className='flex flex-col items-center justify-center'>
        <div className='flex flex-col gap-2 items-center'>
          <div className='flex flex-row items-center gap-3'>
            <RiLockLine size={30} className='text-[#ff4500]'/>
            <h1 className='text-3xl font-semibold uppercase'>Login</h1>
          </div>
          <p className='text-[#111] uppercase'>Welcome back to ProGamers</p>         
        </div>
      </CardHeader>
      <CardBody>
        <form action=''>
          <div className='space-y-4'>
            <Input 
              label='Email'
              variant='bordered'
            />
            <Input 
              label='Password'
              variant='bordered'
              type='password'
            />
            <Button 
              fullWidth
              // color='warning' 
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
