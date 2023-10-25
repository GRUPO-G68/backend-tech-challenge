import { Request, Response, Router } from "express";
import { clienteInDatabaseRepository } from "./clienteInDatabaseRepository";
const clienteController = Router();

// Defina as rotas e manipuladores de rota aqui
clienteController.get(
  "/cliente/:clienteCpf",
  async (req: Request, res: Response) => {
    try {
      const { clienteCpf } = req.params;

      const cliente = await new clienteInDatabaseRepository().findByCpf(
        clienteCpf
      );
      res.status(200).json(cliente);
    } catch (error) {
      res.status(400).json({ message: error });
    }
  }
);

export default clienteController;
