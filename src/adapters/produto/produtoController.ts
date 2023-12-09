import { Request, Response, Router } from "express";
import { produtoInDatabaseRepository } from "./produtoInDatabaseRepository";
const produtoController = Router();

produtoController
  .get("/produto", async (request: Request, response: Response) => {
    try {
      const body = await new produtoInDatabaseRepository().findAll();
      response.status(200).json(body);
    } catch (error) {
      response.status(500).json({ message: error });
    }
  })
  .get(
    "/produto/categoria/:idCategoria",
    async (request: Request, response: Response) => {
      try {
        const idCategoria = request.params?.["idCategoria"];

        const body = await new produtoInDatabaseRepository().findByCategory(
          idCategoria
        );

        response.status(200).json(body);
      } catch (error) {
        response.status(500).json({ message: error });
      }
    }
  )
  .get("/produto/:idProduto", async (request: Request, response: Response) => {
    try {
      const idProduto = request.params?.["idProduto"];

      const body = (
        await new produtoInDatabaseRepository().findById(idProduto)
      )?.[0];

      response.status(200).json(body);
    } catch (error) {
      response.status(500).json({ message: error });
    }
  })
  .post("/produto", async (request: Request, response: Response) => {
    try {
      const produto = request.body;

      await new produtoInDatabaseRepository().save(produto);

      response.status(200).json({ message: "Produto cadastrado com sucesso" });
    } catch (error) {
      response.status(500).json({ message: "Falha ao cadastrar produto" });
    }
  })
  .put("/produto", async (request: Request, response: Response) => {
    try {
      const produto = request.body;
      await new produtoInDatabaseRepository().update(produto);

      response.status(200).json({ message: "Produto atualizao com sucesso" });
    } catch (error) {
      console.error(error);
      response.status(500).json({ message: "Falha ao atualizar produto" });
    }
  })
  .delete(
    "/produto/:idProduto",
    async (request: Request, response: Response) => {
      try {
        const idProduto = request.params?.["idProduto"];

        await new produtoInDatabaseRepository().delete(idProduto);

        response.status(200).json({ message: "Produto removido com sucesso" });
      } catch (error) {
        response
          .status(500)
          .json({ message: `Erro ao remover produto ${error}` });
      }
    }
  );

export default produtoController;
