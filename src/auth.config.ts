import Credentials from 'next-auth/providers/credentials'

import type { NextAuthConfig } from 'next-auth'
import { loginSchema } from './lib/schemas/loginSchema'
 
export default {
  providers: [Credentials({
    name: 'credentials',
    async authorize(creds) {
      const validated = loginSchema.safeParse(creds)
    
    }
  })],
} satisfies NextAuthConfig