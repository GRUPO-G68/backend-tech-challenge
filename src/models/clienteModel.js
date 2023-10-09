import { query } from '../config/dbConnect.js';

const getAll = async () => {
    const clientes = await query('SELECT * from cliente WHERE status = 1');
    return clientes
}

const createCliente = async (cliente) => {
    const {nome, cpf} = cliente;
    const sql = 'INSERT INTO cliente (nome, cpf) VALUES (?,?)'
    const createdCliente = await query(sql, [nome, cpf])
    return createdCliente.insertId.toString()
}

const inactiveCliente = async (id) => {
    const sql = 'UPDATE cliente SET status = 0 WHERE id = ?'
    const createdCliente = await query(sql, [id])
    return createdCliente
}

const updateCliente = async (id,cliente) => {
    const {nome,cpf} = cliente
    const sql = 'UPDATE cliente SET nome = ?, cpf = ? WHERE id = ?'
    const createdCliente = await query(sql, [nome, cpf, id])
    return createdCliente
}

export default {
    getAll,
    createCliente,
    inactiveCliente,
    updateCliente
}

