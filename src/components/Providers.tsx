'use client'

import { NextUIProvider } from '@nextui-org/react'
import React, { ReactNode } from 'react'
import { ToastContainer } from 'react-toastify'

export default function Providers({children}: {children: ReactNode}) {
  return (
    <NextUIProvider>
      <ToastContainer />
      {children}
    </NextUIProvider>
  )
}
