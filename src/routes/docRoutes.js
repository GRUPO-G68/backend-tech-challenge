import express from "express";
const router = express.Router();
import swaggerUi from "swagger-ui-express";
import swaggerDocument from '../../swagger.json' assert { type: 'json' };



router.get("/docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));
router.get("/swagger", (_req,res) => {
      return res.sendFile(process.cwd()+'/swagger.json')
});
router.get('/documentacao', (_req,res) => {
    return res.sendFile(process.cwd()+'/index.html')
});

export default router;
