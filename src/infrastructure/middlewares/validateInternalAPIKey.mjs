import {config} from "../../config/env.mjs"

export const validateInternalAPIKey = (request, response, next) =>{
  const apiKey = request.headers['x-internal-token']

  if(!apiKey || apiKey!= config.internalAPIKey){
    throw new Error("Invalid internalAPIKey")
    response.status(401).json({msg: "Invalid internalAPIKey"})
  }
  next()
}