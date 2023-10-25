import express from "express";
import { config } from "dotenv";
import swaggerUi from "swagger-ui-express";
import swaggerDocument from "../../swagger.json";
import clienteController from "../adapter/clienteController";

config();
const app = express();
const port = process.env.PORT || 9001;

/*docs*/
app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use("/swagger", (_req, res) => {
  return res.sendFile(process.cwd() + "/swagger.json");
});
app.use("/documentacao", (_req, res) => {
  return res.sendFile(process.cwd() + "/index.html");
});

app.use(clienteController);
app.listen(port, () => console.log(`listening on port ${port}`));

// import Database from "./database";
// const db = new Database();
/* app.get("/", async (_req, res) => {
  try {
    const results = await db.query("SELECT * FROM Cliente", []);
    res.json(results);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
});*/
