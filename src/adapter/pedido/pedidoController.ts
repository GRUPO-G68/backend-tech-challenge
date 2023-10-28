import { Request, Response, Router } from "express";
import { PedidoInDatabaseRepository } from "./pedidoInDatabaseRepository";
import { MudarSituacaoPedido } from "../../applications/services/mudarSituacaoPedido";

const pedidoController = Router();
const pedidoRepository = new PedidoInDatabaseRepository();
pedidoController
  .get("/pedido", async (_req: Request, res: Response) => {
    try {
      const pedido = await new PedidoInDatabaseRepository().findAll();
      res.status(200).json(pedido);
    } catch (error) {
      res.status(500).json({ message: error });
    }
  })
  .get("/pedido/situacao/:idSituacao", async (req: Request, res: Response) => {
    try {
      const { idSituacao } = req.params;
      const pedido = await new PedidoInDatabaseRepository().findAll(idSituacao);
      res.status(200).json(pedido);
    } catch (error) {
      res.status(500).json({ message: error });
    }
  })
  .get("/pedido/:idPedido", async (req: Request, res: Response) => {
    try {
      const { idPedido } = req.params;

      const pedido = await new PedidoInDatabaseRepository().findById(idPedido);
      res.status(200).json(pedido);
    } catch (error) {
      res.status(500).json({ message: error });
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
  .put("/pedido/checkout/", async (req: Request, res: Response) => {
    try {
      const { idPedido } = req.body;
      const result = await new MudarSituacaoPedido(pedidoRepository).execute({
        idPedido,
        idSituacao: "2",
      });
      res.status(200).json({ message: result });
    } catch (error) {
      res.status(500).json({ message: `Erro ao realizar pagamento ${error}` });
    }
  })
  .put("/pedido/pronto/", async (req: Request, res: Response) => {
    try {
      const { idPedido } = req.body;
      const result = await new MudarSituacaoPedido(pedidoRepository).execute({
        idPedido,
        idSituacao: "3",
      });
      res.status(200).json({ message: result });
    } catch (error) {
      res
        .status(500)
        .json({ message: `Erro em deixar pedido pronto ${error}` });
    }
  })
  .put("/pedido/finalizado/", async (req: Request, res: Response) => {
    try {
      const { idPedido } = req.body;
      const result = await new MudarSituacaoPedido(pedidoRepository).execute({
        idPedido,
        idSituacao: "4",
      });
      res.status(200).json({ message: result });
    } catch (error) {
      res.status(500).json({ message: `Erro ao finalizar pedido ${error}` });
    }
  });

export default pedidoController;
