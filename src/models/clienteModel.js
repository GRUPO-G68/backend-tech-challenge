import { query } from '../config/dbConnect.js';

const getAll = async () => {
    const clientes = await query('SELECT * from cliente');
    return clientes;
}

export default {getAll}

