import bcrypt from "bcrypt"
import { User } from "../entities/user.entity.mjs";

export const registerUser = async(userRepository, userData) =>{
  const existingUser = await userRepository.findByEmail(userData.email)

  if(existingUser){
    throw new Error("User Already Registered ")
  }
  const saltRounds = 10;
  const hashedPassword = await bcrypt.hash(userData.password, saltRounds)
 
  const user = new User({
    email: userData.email,
    password: hashedPassword,
    firstName: userData.firstName,
    lastName: userData.lastName,
    role: userData.role,
    crm: userData.crm
  })

  return await userRepository.create(user.toPlainObject())
}