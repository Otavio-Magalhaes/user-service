import dotenv from 'dotenv'

dotenv.config()

export const config = {
  port: process.env.PORT || 3000,
  internalAPIKey: process.env.INTERNAL_API_SECRET
}