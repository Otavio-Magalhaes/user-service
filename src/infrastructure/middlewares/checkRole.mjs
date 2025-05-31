export const checkRole = async(request, response, next)=>{ 
   if (request.user.role !== 'ADMIN' && request.user.role !== 'GESTOR') {
      return response.status(403).json({ msg: "Você não tem permissão." });
    }
  next();
}