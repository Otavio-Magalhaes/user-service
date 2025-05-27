export const checkRole = (role) => async(request, response, next)=>{ 
  console.log(` role do usuario: ${request.user.role}`)
  if (request.user?.role !== role) {
    return response.status(403).json({ message: "Acesso negado" });
  }
  next();
}