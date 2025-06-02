import bcrypt from "bcrypt"
export const changeUserPassword = async (userRepository, userId, currentPassword, newPassword) => {
  try {
    const user = await userRepository.findById(userId)
    if (!user) throw new Error("user not found")
    
    const passwordToChange = await userRepository.getPassword(user.id)
    
    const passwordMatch = await bcrypt.compare(currentPassword, passwordToChange)
    if (!passwordMatch) {
      throw new Error("Incorrect Current Password!")
    }

    if(currentPassword === newPassword){
      throw new Error("The new Password needs to be different from the current one.")
    }
  
    const hashed = await bcrypt.hash(newPassword,10)
    await userRepository.updatePassword(userId, hashed);

  } catch (err) {
    console.log(err)
    throw new Error("Error in change password.")
  }

}