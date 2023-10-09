import clienteModel from "../models/clienteModel.js"

const getAll = async  (_req, res) => {
    const cliente = await clienteModel.getAll()
    return res.status(200).json(cliente)
}

const createCliente = async  (req, res) => {
    const createdCliente = await clienteModel.createCliente(req.body)
    return res.status(201).json(createdCliente)
}
export default {
    getAll,
    createCliente
}
