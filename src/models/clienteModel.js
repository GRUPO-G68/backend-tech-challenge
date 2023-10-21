import { query } from "../config/dbConnect.js";
//  código 1 para cliente ativo "número mágico" - arrumar

const getAll = async () => {
  const clientes = await query("SELECT * from Cliente");
  return clientes;
};

const getByCpf = async (cpf) => {
  const sql = "SELECT * from Cliente WHERE cpf = ?";
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
    "INSERT INTO Cliente (nome, cpf, email ) VALUES (?,?,?)";
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
  const sql = "UPDATE Cliente SET status = 0 WHERE id = ?";
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
    "UPDATE Cliente SET nome = ?, cpf = ?, email = ? WHERE id = ?";
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
