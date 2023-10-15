import { query } from "../config/dbConnect.js";
//  código 1 para cliente ativo "número mágico" - arrumar

const getAll = async () => {
  const clientes = await query("SELECT * from cliente WHERE status = 1");
  return clientes;
};

const getByCpf = async (cpf) => {
  const sql = "SELECT * from cliente WHERE status = 1 AND cpf = ?";
  const cliente = await query(sql, [cpf]);
  return cliente;
};

const createCliente = async (cliente) => {
  const {
    nome,
    cpf,
    email = null,
    celular = null,
    aniversario = null,
  } = cliente;
  const sql =
    "INSERT INTO cliente (nome, cpf, email, celular, aniversario) VALUES (?,?,?,?,?)";
  const createdCliente = await query(sql, [
    nome,
    cpf,
    email,
    celular,
    aniversario,
  ]);
  return createdCliente.insertId.toString();
};

const inactiveCliente = async (id) => {
  const sql = "UPDATE cliente SET status = 0 WHERE id = ?";
  const updatedClienteStatus = await query(sql, [id]);
  return updatedClienteStatus;
};

const updateCliente = async (id, cliente) => {
  const {
    nome,
    cpf,
    email = null,
    celular = null,
    aniversario = null,
  } = cliente;
  const sql =
    "UPDATE cliente SET nome = ?, cpf = ?, email = ?, celular = ?, aniversario = ? WHERE id = ?";
  const updatedCliente = await query(sql, [
    nome,
    cpf,
    email,
    celular,
    aniversario,
    id,
  ]);
  return updatedCliente;
};

export default {
  getAll,
  createCliente,
  inactiveCliente,
  updateCliente,
  getByCpf
};
