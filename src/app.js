import express from "express";
import routes from "./routes/index.js";

const app = express();
const port = process.env.PORT;

routes(app);
export default app;
