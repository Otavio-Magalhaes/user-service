export class User{
  constructor({email, password, name, crm, role, cargo}){
    this.email = email
    this.password = password
    this.name = name
    this.role = role 
    this.crm = crm

    this.validate()
  }

  validate(){
    if(!this.name || !this.email || !this.password){
      throw new Error("nome, email e senha  são obrigatorios.")
    }
    if(this.role === "medico" && !this.crm ){
      throw new Error("Médico precisa ter um CRM cadastrado.")
    }
  }

  isMedico(){
    return role == "medico" ? true : false
  }
  isEnfermeiro(){
    return role == "enfermeiro" ? true : false
  }

  isPaciente(){
    return role == "paciente" ? true : false
  }

  toPlainObject(){
    return {
      id: this.id,
      email: this.email,
      password: this.password,
      name: this.name,
      role: this.role,
      crm: this.crm
    }
  }

}