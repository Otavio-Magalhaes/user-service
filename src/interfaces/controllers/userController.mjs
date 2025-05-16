import { registerUser } from "../../domain/usecases/registerUser.mjs"
import { UserPrismaRepository } from "../../infrastructure/database/prisma/UserPrismaRepository.mjs"


const userRepository = new UserPrismaRepository

export const register = async( request, response) =>{
  try{
    const newUser = await registerUser(userRepository, request.body)

    response.status(201).json({msg: "Successfully Registered User"})
  } catch(err){
    console.log(err)
    response.status(400).json({ error: err.message})
  }
}