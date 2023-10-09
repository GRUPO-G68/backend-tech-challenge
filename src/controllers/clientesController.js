import clienteModel from "../models/clienteModel.js"

const getAll = async  (_req, res) => {
    const cliente = await clienteModel.getAll()
    return res.status(200).json(cliente)
}
export default {getAll}
