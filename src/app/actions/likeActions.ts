'use server'

import { auth } from '@/auth'

export async function toggleLikeMember(
  targetUserId: string,
  isLiked: boolean
) { 
  try {
    const session = await auth()
    const userId = session?.user?.id
  } catch (error) {
    
  }
}