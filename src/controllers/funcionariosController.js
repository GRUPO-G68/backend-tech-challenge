import funcionarioModel from "../models/funcionarioModel.js";

const getAll = async (_req, res) => {
  const funcionario = await funcionarioModel.getAll();
  return res.status(200).json(funcionario);
};

const createFuncionario = async (req, res) => {
  const createdFuncionario = await funcionarioModel.createFuncionario(req.body);
  return res.status(201).json(createdFuncionario);
};

const inactiveFuncionario = async (req, res) => {
  const { id } = req.params;
  await funcionarioModel.inactiveFuncionario(id);
  return res.status(204).json();
};

const updateFuncionario = async (req, res) => {
  const { id } = req.params;
  await funcionarioModel.updateFuncionario(id, req.body);
  return res.status(204).json();
};
export default {
  getAll,
  createFuncionario,
  inactiveFuncionario,
  updateFuncionario,
};
