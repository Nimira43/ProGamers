import { PrismaClient } from '@prisma/client'
import { membersData } from './membersData'
import { hash } from 'bcryptjs'

const prisma = new PrismaClient()

async function seedMembers() {
  return membersData.map(async member => prisma.user.create({
    data: {
      email: member.email,
      emailVerified: new Date(),
      name: member.name,
      passwordHash: await hash('password', 10),
    }
  }))
}