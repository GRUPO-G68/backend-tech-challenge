import express from "express"
import clientes from "./clientesRoutes.js"

const routes = (app) => {
    app.route("/").get((_req, res) => {
        res.status(200).send({message: "Bem vindo!"})
    })

    app.use(
        express.json(),
        clientes,
    )
}

export default routes