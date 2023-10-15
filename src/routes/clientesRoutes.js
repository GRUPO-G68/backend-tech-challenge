import express from "express";
import Cliente from "./../controllers/clientesController.js";
const router = express.Router();
import clientesMiddleware from "../middlewares/clientesMiddleware.js";

router.get("/clientes", Cliente.getAll);
router.get("/clientes/cpf/:cpf", Cliente.getByCpf);
router.post("/clientes", clientesMiddleware.valideBody, Cliente.createCliente);
router.delete("/clientes/:id", Cliente.inactiveCliente);
router.put(
  "/clientes/:id",
  clientesMiddleware.valideBody,
  Cliente.updateCliente,
);

export default router;
