import "dotenv/config"
import app from "./src/app.js"
const port = process.env.PORT

app.listen(port, () => {
    console.log(`Exemple app Listening on port ${port}`)
})
