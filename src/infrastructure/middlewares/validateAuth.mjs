
export const validateAuth = async (request, response, next )=>{
  const logado = await fetch("http://auth-service:3000/api/auth/check",{
    headers: {
      Authorization: request.headers['authorization']  
    }
  })

  const result = await logado.json()

  if(logado.status != 200 || !result.user)
    throw new Error("user nao esta logado")
  next()
}