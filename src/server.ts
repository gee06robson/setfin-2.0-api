import express from "express"
import "express-async-errors"
import { router } from "./routes"
import 'dotenv/config'
import cors from "cors"
import { HandleErrors } from "./Errors"

const handleErrors = new HandleErrors()

const app = express()

app.use(cors())
app.use(express.json())
app.use(router)
app.use(handleErrors.handle)

app.listen(process.env.SERVER_PORT)
// app.listen(process.env.SERVER_PORT || 4000, () => {
//   console.log(["API-FINANCEIRO"], [`ACCESSIBLE AT DOOR ${process.env.SERVER_PORT}`])
// })