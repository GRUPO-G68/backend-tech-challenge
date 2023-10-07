import { query } from '../config/dbConnect.js';

const routes = (app) => {
  
    app.route("/").get(async (req, res) => {
        try {
            const rows = await query('SELECT * from clientes');
            res.send(rows)
        }catch(e){
            console.log(e)
        }
  })
}
export default routes