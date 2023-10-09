import express from "express";
import Funcionario from "./../controllers/funcionariosController.js";
const router = express.Router();
import funcionariosMiddleware from "../middlewares/funcionariosMiddleware.js";

router.get("/funcionarios", Funcionario.getAll);
router.post(
  "/funcionarios",
  funcionariosMiddleware.valideBody,
  Funcionario.createFuncionario,
);
router.delete("/funcionarios/:id", Funcionario.inactiveFuncionario);
router.put(
  "/funcionarios/:id",
  funcionariosMiddleware.valideBody,
  Funcionario.updateFuncionario,
);

export default router;
