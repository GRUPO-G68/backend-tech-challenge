import express from "express";
import clientes from "./clientesRoutes.js";
import funcionarios from "./funcionariosRoutes.js";
import swaggerUi from "swagger-ui-express";
import swaggerDocument from '../../swagger.json' assert { type: 'json' };

const routes = (app) => {
  app.route("/").get((_req, res) => {
    res.status(200).send({ message: "Olar!" });
  });

  app.use(express.json(), clientes);
  app.use(express.json(), funcionarios);

  /*docs*/
  app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
  app.use('/swagger', (_req,res) => {
    return res.sendFile(process.cwd()+'/swagger.json')
  });
  app.use('/documentacao', (_req,res) => {
    return res.sendFile(process.cwd()+'/index.html')
  });

};

export default routes;
