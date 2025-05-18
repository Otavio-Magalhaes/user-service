import express from "express"
import router from "./src/interfaces/routes/index.mjs"


const app = express()

app.use(express.json())
app.use(router)


app.get("/", (request, response)=>{
  response.send("User-service rodando ")
})

export default app