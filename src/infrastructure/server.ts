import express from "express";
import { config } from "dotenv";
import swaggerUi from "swagger-ui-express";
// import swaggerDocument from "../../s"
import clienteController from "../adapters/cliente/clienteController";
import pedidoController from "../adapters/pedido/pedidoController";
import produtoController from "../adapters/produto/produtoController";
import bodyParser from "body-parser";

config();
const app = express();
const port = process.env.PORT || 9001;

app.use(bodyParser.json());
app.use(clienteController, produtoController, pedidoController);

/*docs*/
// app.use("/documentacao", swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use("/swagger", (_req, res) => {
  return res.sendFile(process.cwd() + "/swagger.json");
});
app.use("/", (_req, res) => {
  return res.sendFile(process.cwd() + "/index.html");
});

app.listen(port, () => console.log(`listening on port ${port}`));
