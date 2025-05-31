import { PrismaClient } from "@prisma/client";

import { UserRepository } from "../../../domain/repositories/user.repository.mjs";

export const prisma = new PrismaClient()

export class UserPrismaRepository extends UserRepository {
  async findByEmail(email) {
    return await prisma.user.findUnique({
      where: { email }
    })
  }

  async create(userData) {
    return await prisma.user.create({
      data: userData
    })
  }

  async getAll() {
    return await prisma.user.findMany({
      select: {
        id: true,
        email: true,
        role: true,
        crm: true,
        firstName: true,
        lastName: true
      }
      ,
      orderBy: {
        role: 'asc'
      }
    })
  }

  async findById(id) {
    return await prisma.user.findUnique({
      where: { id },
      select: {
        id: true,
        email: true,
        role: true,
        crm: true,
        firstName: true,
        lastName: true
      }
    })
  }

  async deleteById(id){
    return await prisma.user.delete({
      where: {id}
    })
  }

  async update(id, userData){
   const user = await prisma.user.update({
    where: { id },
    data: userData
  });
  return user;
  }
  
}
