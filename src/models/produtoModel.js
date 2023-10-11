import { query } from "../config/dbConnect.js";

const getAll = async () => {
  const produtos = await query("SELECT * from produto WHERE status = 1");
  return produtos;
};

const createProduto = async (produto) => {
  const { nome, categoria, estoque = null } = produto;
  const sql = "INSERT INTO produto (nome, categoria, estoque) VALUES (?,?,?,?)";
  const createdProduto = await query(sql, [nome, categoria, estoque]);
  return createdProduto.insertId.toString();
};

const inactiveProduto = async (id) => {
  const sql = "UPDATE produto SET status = 0 WHERE id = ?";
  const updatedProdutoStatus = await query(sql, [id]);
  return updatedProdutoStatus;
};

const updateProduto = async (id, produto) => {
  const { nome, categoria, estoque = null } = cliente;
  const sql =
    "UPDATE produto SET nome = ?, categoria = ?, estoque = ? WHERE id = ?";
  const updatedProduto = await query(sql, [nome, categoria, estoque]);
  return updatedProduto;
};

const deleteProduto = async (id) => {
  const sql = "DELETE FROM produto WHERE id = ?";
  const deletedProduto = await query(sql, [id]);
  return deletedProduto;
};

export default {
  getAll,
  createProduto,
  inactiveProduto,
  updateProduto,
  deleteProduto,
};
