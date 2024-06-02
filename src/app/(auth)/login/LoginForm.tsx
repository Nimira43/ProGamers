'use client'

import { Button, Card, CardBody, CardHeader, Input } from '@nextui-org/react'
import React from 'react'
import { useForm } from 'react-hook-form'
import { GiPadlock } from 'react-icons/gi'

export default function LoginForm() {
    const {register, handleSubmit, formState: {errors, isValid}} = useForm()
    const onSubmit = (data: any) => {
        console.log(data)
    }
    return (
        <Card className='w-2/5 mx-auto'>
            <CardHeader className='flex flex-col items-center justify-center'>
                <div className='flex flex-col gap-2 items-center text-[#111]'>
                    <div className='flex flex-row items-center gap-3'>
                        <GiPadlock size={30} className='text-[#ff4500]'/>
                        <h1 className='text-3xl font-semibold'>Login</h1>
                    </div>
                    <p className='text-[#333]'>Please enter Login details</p>
                </div>
            </CardHeader>
            <CardBody>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="space-y-4">
                        <Input 
                            defaultValue=''
                            label='Email'
                            variant='bordered'
                            {...register('email', {required: 'Email is required'})}
                            isInvalid={!!errors.email}
                            errorMessage={errors.email?.message as string}
                        />
                        <Input 
                            defaultValue=''
                            label='Password'
                            variant='bordered'
                            type='password'
                            {...register('password', {required: 'Password is required'})}
                            isInvalid={!!errors.password}
                            errorMessage={errors.password?.message as string}
                        />
                        <Button
                            isDisabled={!isValid}
                            className='text-[#ff4500] bg-[#111] font-semibold'
                            fullWidth
                            type='submit'
                        >
                            Submit
                        </Button>
                    </div>
                </form>
            </CardBody>
        </Card>
    )
}
