export const checkRole = (role) => async(request, response, next)=>{ 
  console.log(` role do usuario: ${request.user.role}`)
   if (request.user.role !== 'ADMIN' && request.user.role !== 'GESTOR') {
      return response.status(403).json({ msg: "Você não tem permissão." });
    }
  next();
}