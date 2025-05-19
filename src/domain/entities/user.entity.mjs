import { ROLES } from "../constants/roles.mjs"

export class User{
  constructor({email, password, firstName, lastName, crm, role, cargo}){
    this.email = email
    this.password = password
    this.firstName = firstName
    this.lastName = lastName
    this.role = role.toUpperCase()
    this.crm = crm

    this.validate()
  }

  validate(){
    if(!this.firstName || !this.lastName || !this.email || !this.password){
      throw new Error("nome, email e senha  são obrigatorios.")
    }
    if(this.role === "MEDICO" && !this.crm ){
      throw new Error("Médico precisa ter um CRM cadastrado.")
    }else if(this.role !== "MEDICO" && this.crm ){
      throw new Error("Somente Médico deve possuir CRM.")
    }
    
    if(!ROLES.includes(this.role)){
      throw new Error("Role invalida, certifiquese de cadastrar uma Role existente.")
    }
  }

  hasRole(){
    return this.role
  }

  toPlainObject(){
    return {
      id: this.id,
      email: this.email,
      password: this.password,
      firstName: this.firstName,
      lastName: this.lastName, 
      role: this.role,
      crm: this.crm
    }
  }
}