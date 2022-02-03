import express from "express"
import "express-async-errors"
import { router } from "./routes"
import * as dotenv from "dotenv"
import cors from "cors"
import { HandleErrors } from "./Errors"

const handleErrors = new HandleErrors()

dotenv.config()

const app = express()

app.use(cors())
app.use(express.json())
app.use(router)
app.use(handleErrors.handle)

app.use(express.static(__dirname + '/Public'))
app.get('/', (req, res) => {
  res.sendFile('index.html')
})

app.get("/callbacksuccess", (req, res) => {
  console.log("teste")
})  


app.listen(process.env.SERVER_PORT, () => {
  console.log([
    [`The server is running on the port ${process.env.SERVER_PORT}`], 
    ["API FINANCEIRO"]
  ])
})