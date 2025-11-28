'use server'

import { auth } from '@/auth'
import { prisma } from '@/lib/prisma'

export async function toggleLikeMember(
  targetUserId: string,
  isLiked: boolean
) { 
  try {
    const session = await auth()
    const userId = session?.user?.id
  
    if (!userId) throw new Error('Unauthorised.')

    if (isLiked) {
      await prisma.like.delete({
        where: {
          sourceUserId_targetUserId: {
            sourceUserId: userId,
            targetUserId
          }
        }
      })
    } else {
      await prisma.like.create({
        data: {
          sourceUserId: userId,
          targetUserId
        }
      })
    }
    
  } catch (error) {
    console.log(error)
    throw error
  }
}

export async function fetchCurrentUserLikeIds() {
  
}