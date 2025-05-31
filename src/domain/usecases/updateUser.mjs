export const updateUser = async(userRepository,id, userData)=>{
  const allowedFildes = ['firstName', 'lastName', 'role', 'crm']
  const filterData = Object.fromEntries(
    Object.entries(userData).filter(([key]) => allowedFildes.includes(key))
  )
  const existingUser = await userRepository.findById(id)
  if (!existingUser) {
    throw new Error("Usuário não encontrado");
  }
  if(filterData.role === "MEDICO" && !filterData.crm){
    console.log("Medico necessita de um CRM")
    throw new Error("Medico necessita de um CRM")
  }

 return await userRepository.update(id, filterData)

}