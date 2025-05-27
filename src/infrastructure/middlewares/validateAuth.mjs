
export const validateAuth = async (request, response, next )=>{
  const res = await fetch("http://auth-service:3000/api/auth/check",{
    headers: {
      Authorization: request.headers['authorization']  
    }
  })

  if (!res.ok) {
    const error = await res.json();
    console.log("Erro no auth-service:", error);
    return response.status(res.status).json({ message: "Erro ao verificar usuário" });
  }

  const data = await res.json()

  request.user = data.user
 
  next()
}