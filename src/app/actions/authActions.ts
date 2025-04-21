'user server'

import { RegisterSchema } from '@/lib/schemas/registerSchema'

export async function registerUser(data: RegisterSchema) {
  const validated = registerSchema.safeParse(data)

  if (!validated.success) {
    return {error: validated.error.errors}
  }
}