import { checkSchema, matchedData, validationResult } from "express-validator";

export const schemaValidator = (schema) =>{
  return [
    checkSchema(schema), 
    async (request, response, next) => {
      const result = validationResult(request)
      if (!result.isEmpty()) {
        return response.status(400).send({errors: result.array()})
      }
      const data = matchedData(request)
      request.validated = data
      next()
    }
  ]
}