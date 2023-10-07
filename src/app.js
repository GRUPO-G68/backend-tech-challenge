import express from "express"
import routes from "./routes/index.js"

const app = express()
const port = process.env.PORT

//pega o que esta chegando via POST ou PUT e transforma um objeto para pode manipular
app.use(express.json())

routes(app)

export default app

