import { registerUser } from "../../domain/usecases/registerUser.mjs"
import { updateUser } from "../../domain/usecases/updateUser.mjs"
import { UserPrismaRepository } from "../../infrastructure/database/prisma/UserPrismaRepository.mjs"


const userRepository = new UserPrismaRepository

export const registerUserController = async (request, response) => {
  try {
    const userData = request.validated
    const newUser = await registerUser(userRepository, userData)

    response.status(201).json({ msg: "User registered successfully" })
  } catch (err) {
    console.error("Register User Error:", err)
    response.status(500).json({ "Erro Interno do Servidor." })
  }
}

export const getAllUsers = async (request, response) => {
  try {
    const users = await userRepository.getAll()
    response.status(200).json(users)
  } catch (err) {
    console.log(err)
    response.status(500).json({ message: "Erro interno do servidor" })
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

export const getUserById = async (request, response) => {
  try {
    const { id } = request.params
    const user = await userRepository.findById(id)
    if (!user) return response.status(404).json({ error: 'Usuario nao encontrado' })
    response.json(user)
  } catch (err) {
    response.status(500).json({ msg: "Erro interno do servidor" })
  }
}

export const deleteUser = async (request, response) => {
  const { id } = request.params;

  try {
    const result = await userRepository.deleteById(id);
    response.status(200).json({
      message: "Usuário deletado com sucesso",
      deletedUser: {
        id: result.id,
        name: result.name,
        email: result.email
      }
    });

  } catch (err) {
    if (err.code === 'P2025') {
      return response.status(404).json({ msg: "Usuário não encontrado" });
    }

    console.error("Erro ao deletar usuário:", err);
    response.status(500).json({ msg: "Erro Interno do Servidor" });
  }
}

export const updateUserController = async (request, response) => {
  try {
    const userData = request.validated
    const {id}  = request.params
    const newUser = await updateUser(userRepository, id, userData)

    response.status(200).json({msg: "User Updated Sucessfuly"})
  } catch (err) {
    if(err.message == "Medico necessita de um CRM"){
      return response.status(403).json({msg:"Medico necessita de um CRM"})
    }
    response.status(500).json({msg: "Erro Interno do Servidor" })
  }
}