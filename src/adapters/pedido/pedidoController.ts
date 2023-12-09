import { Request, Response, Router } from "express";
import { PedidoInDatabaseRepository } from "./pedidoInDatabaseRepository";
import { MudarSituacaoPedido } from "../../application/services/mudarSituacaoPedido";

const pedidoController = Router();
const pedidoRepository = new PedidoInDatabaseRepository();
pedidoController
  .get("/pedido", async (_req: Request, res: Response) => {
    try {
      const pedido = await new PedidoInDatabaseRepository().findAll();
      res.status(200).json(pedido);
    } catch (error) {
      res.status(500).json({ message: `Erro ao buscar pedido ${error}` });
    }
  })
  .post("/pedido", async (req: Request, res: Response) => {
    try {
      const result = await new PedidoInDatabaseRepository().save(req.body);
      res.status(200).json({ message: result });
    } catch (error) {
      res.status(500).json({ message: `Erro ao realizar pedido ${error}` });
    }
  })
  .get("/pedido/:idPedido", async (req: Request, res: Response) => {
    try {
      const { idPedido } = req.params;

      const pedido = await new PedidoInDatabaseRepository().findById(idPedido);
      res.status(200).json(pedido);
    } catch (error) {
      res.status(500).json({ message: `Erro ao buscar pedido ${error}` });
    }
  })
  .get("/pedido/situacao/:idSituacao", async (req: Request, res: Response) => {
    try {
      const { idSituacao } = req.params;
      const pedido = await new PedidoInDatabaseRepository().findAll(idSituacao);
      res.status(200).json(pedido);
    } catch (error) {
      res.status(500).json({ message: `Erro ao buscar pedido ${error}` });
    }
  })
  .put("/pedido/:idPedido/situacao", async (req: Request, res: Response) => {
    try {
      const { idSituacao } = req.body;
      const { idPedido } = req.params;
      await new MudarSituacaoPedido(pedidoRepository).execute({
        idPedido,
        idSituacao,
      });
      res.status(200).json({ message: "Pedido Atualizado" });
    } catch (error) {
      res.status(500).json({ message: `Erro ao finalizar pedido ${error}` });
    }
  });

export default pedidoController;
