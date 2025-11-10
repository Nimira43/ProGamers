'use server'

import { auth } from '@/auth'
import { prisma } from '@/lib/prisma'

export async function getMembers() {
  const session = await auth()

  if (!session?.user) return null
  
  try {

    // Test code

    throw new Error('Testing...')

    //

    return prisma.member.findMany({
      where: {
        NOT: {
          userId: session.user.id
        }
      }
    })
  } catch (error) {
    console.log(error)

    // Error testing
    throw error
    // End of Error testing

  }
}

export async function getMemberByUserId(userId: string) {
  try {
    return prisma.member.findUnique({where: {userId}})
  } catch (error) {
    console.log(error)
  }
}

export async function getMemberPhotosByUserId(userId: string) {
  const member = await prisma.member.findUnique({
    where: {userId},
    select: {photos: true}
  })

  if (!member) return null

  return member.photos
}