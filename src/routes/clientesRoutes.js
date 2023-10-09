import express from "express"
import Cliente from "./../controllers/clientesController.js"
const router = express.Router()

router.get("/clientes", Cliente.getAll)
router.post("/clientes", Cliente.createCliente)

export default router