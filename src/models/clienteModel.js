import { query } from '../config/dbConnect.js';

const getAll = async () => {
    const clientes = await query('SELECT * from cliente');
    return clientes
}

const createCliente = async (cliente) => {
    const {nome, cpf} = cliente;

    const sql = 'INSERT INTO cliente (nome, cpf) VALUES (?,?)'

    const createdCliente = await query(sql, [nome, cpf])
    return createdCliente.insertId.toString()
}

export default {
    getAll,
    createCliente
}

