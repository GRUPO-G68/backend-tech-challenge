import clienteModel from "../models/clienteModel.js"

const getAll = async  (_req, res) => {
    const cliente = await clienteModel.getAll()
    return res.status(200).json(cliente)
}

// const getByCpf = async  (req, res) => {
//     const {cpf} = req.params
//     const cliente = await clienteModel.getByCpf(cpf)
//     return res.status(200).json(cliente)
// }

const createCliente = async  (req, res) => {
    const createdCliente = await clienteModel.createCliente(req.body)
    return res.status(201).json(createdCliente)
}

const inactiveCliente = async  (req, res) => {
    const {id} = req.params
    await clienteModel.inactiveCliente(id)
    return res.status(204).json()
}

const updateCliente = async  (req, res) => {
    const {id} = req.params
    await clienteModel.updateCliente(id,req.body)
    return res.status(204).json()
}
export default {
    getAll,
    createCliente,
    inactiveCliente,
    updateCliente
    // getByCpf
}
