import { query } from "../config/dbConnect.js";

const getAll = async () => {
  const funcionarios = await query(
    "SELECT * from funcionario WHERE status = 1",
  );
  return funcionarios;
};

const createFuncionario = async (funcionario) => {
  const {
    nome,
    cpf,
    ctps_numero,
    ctps_serie,
    ctps_emissao,
    data_inicio,
    email = null,
    celular = null,
  } = funcionario;
  const sql =
    "INSERT INTO Funcionario (nome, cpf, ctps_numero, ctps_serie, ctps_emissao, data_inicio, email, celular) VALUES (?,?,?,?)";
  const createdFuncionario = await query(sql, [
    nome,
    cpf,
    ctps_numero,
    ctps_serie,
    ctps_emissao,
    data_inicio,
    email,
    celular,
  ]);
  return createdFuncionario.insertId.toString();
};

const inactiveFuncionario = async (id) => {
  const sql = "UPDATE Funcionario SET status = 0 WHERE id = ?";
  const updatedFuncionarioStatus = await query(sql, [id]);
  return updatedFuncionarioStatus;
};

const updateFuncionario = async (id, funcionario) => {
  const {
    nome,
    cpf,
    ctps_numero,
    ctps_serie,
    ctps_emissao,
    data_inicio,
    email = null,
    celular = null,
  } = funcionario;
  const sql =
    "UPDATE funcionario SET nome = ?, cpf = ?, ctps_numero = ?, ctps_serie = ?, ctps_emissao = ?,data_inicio = ?, email = ?, celular = ? WHERE id = ?";
  const updatedFuncionario = await query(sql, [
    nome,
    cpf,
    ctps_numero,
    ctps_serie,
    ctps_emissao,
    data_inicio,
    email,
    celular,
    id,
  ]);
  return updatedFuncionario;
};

export default {
  getAll,
  createFuncionario,
  inactiveFuncionario,
  updateFuncionario,
};
