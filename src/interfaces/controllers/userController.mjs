import { registerUser } from "../../domain/usecases/registerUser.mjs"
import { UserPrismaRepository } from "../../infrastructure/database/prisma/UserPrismaRepository.mjs"


const userRepository = new UserPrismaRepository
 
export const registerUserController = async( request, response) =>{
  try{
    const userData = request.validated
    const newUser = await registerUser(userRepository, userData)

    response.status(201).json({msg: "User registered successfully"})
  } catch(err){
    console.error("Register User Error:", err)
    response.status(400).json({ error: err.message})
  }
}

export const getAllUsers = async(request, response)=>{
  try{
    const users = await userRepository.getAll()
    response.status(200).json(users)
  }catch(err){
    console.log(err)
    response.status(500).json({message: "Erro interno do servidor"})
  }
}


export const getUserByEmail = async (request, response) => {
  const { email } = request.body
  const user = await userRepository.findByEmail(email)
  if (!user) return response.status(404).json({ error: 'Usuário não encontrado' })

  response.json({
    id: user.id,
    password: user.password,
    email: user.email,
    role: user.role,
  })
}