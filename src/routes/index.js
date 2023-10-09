import express from "express";
import clientes from "./clientesRoutes.js";
import funcionarios from "./funcionariosRoutes.js";

const routes = (app) => {
  app.route("/").get((_req, res) => {
    res.status(200).send({ message: "Olar!" });
  });

  app.use(express.json(), clientes);
  app.use(express.json(), funcionarios);
};

export default routes;
