import express from "express";
import clientes from "./clientesRoutes.js";
import funcionarios from "./funcionariosRoutes.js";
import { renderShelfHTML } from "@herbsjs/herbsshelf";
import usecases from "./_uclist.js";

const routes = (app) => {
  app.route("/").get((_req, res) => {
    res.status(200).send({ message: "Olar!" });
  });

  app.get("/documentacao", (req, res) => {
    res.setHeader("Content-Type", "text/html");
    const shelf = renderShelfHTML("Projeto", usecases());
    res.send(shelf);
  });

  app.use(express.json(), clientes);
  app.use(express.json(), funcionarios);
};

export default routes;
