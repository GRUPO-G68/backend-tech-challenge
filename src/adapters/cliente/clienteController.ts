import { Request, Response, Router } from "express";
import { clienteInDatabaseRepository } from "./clienteInDatabaseRepository";
const clienteController = Router();

clienteController
  .get("/cliente", async (_req: Request, res: Response) => {
    try {
      const cliente = await new clienteInDatabaseRepository().findAll();
      res.status(200).json(cliente);
    } catch (error) {
      res.status(500).json({ message: error });
    }
  })
  .get("/cliente/:clienteCpf", async (req: Request, res: Response) => {
    try {
      const { clienteCpf } = req.params;

      const cliente = await new clienteInDatabaseRepository().findByCpf(
        clienteCpf
      );
      res.status(200).json(cliente);
    } catch (error) {
      res.status(500).json({ message: error });
    }
  })
  .post("/cliente", async (req: Request, res: Response) => {
    try {
      await new clienteInDatabaseRepository().save(req.body);
      res.status(200).json({ message: "Cliente cadastrado com sucesso" });
    } catch (error) {
      res.status(500).json({ message: `Erro ao cadastar cliente ${error}` });
    }
  });

export default clienteController;
