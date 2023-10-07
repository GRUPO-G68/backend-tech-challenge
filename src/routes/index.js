import { query } from '../config/dbConnect.js';

const routes = (app) => {
  
    app.route("/").get(async (req, res) => {
        let conn;
        try {
            const rows = await query('SELECT * from clientes');
            res.send(rows)
        }catch(e){
            console.log(e)
        } finally {
        if (conn) conn.release(); //release to pool
        }
  })
}
export default routes