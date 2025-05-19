
export const validateAuth = (request, response, next )=>{
  const logado = fetch("http://auth-service:3000/api/auth/check")
  if(logado.status != 200 || !logado.user)
    throw new Error("user nao esta logado")
  next()
}