import { z } from 'zod'

export const loginSchema = z.object({
  emsil: z.string().email(),
  password: z.string().min(8)
})