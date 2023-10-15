import express from "express";
import clientes from "./clientesRoutes.js";
import funcionarios from "./funcionariosRoutes.js";
import doc from "./docRoutes.js";

const routes = (app) => {
  app.route("/").get((_req, res) => {
    res.status(200).send({ message: "Olar!" });
  });

  app.use(express.json(), clientes);
  app.use(express.json(), funcionarios);
  app.use(express.json(), doc);

  /*docs*/
  // app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
  // app.use('/swagger', (_req,res) => {
  //   return res.sendFile(process.cwd()+'/swagger.json')
  // });
  // app.use('/documentacao', (_req,res) => {
  //   return res.sendFile(process.cwd()+'/index.html')
  // });

};

export default routes;
