import { PrismaClient } from '@prisma/client'
import { membersData } from './membersData'

const prisma = new PrismaClient()

async function seedMembers() {
  return membersData.map(async member => prisma.user.create({
    
  }))
}