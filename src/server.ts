import express from "express";
import { config } from "dotenv";
import Database from "./infrastructure/database";

config();

const app = express();

const port = process.env.PORT || 9001;

const db = new Database();

app.get("/", async (req, res) => {
  try {
    const results = await db.query("SELECT * FROM Cliente", []);
    res.json(results);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
});

app.listen(port, () => console.log(`listening on port ${port}`));
