'use server'

import { auth } from '@/auth'
import { prisma } from '@/lib/prisma'

export async function getMembers() {
  const session = await auth()

  if (!session?.user) return null
  
  try {
    return prisma.member.findMany({
      where: {
        NOT: {
          userId:
        }
      }
    })
  } catch (error) {
    console.log(error)
  }
}