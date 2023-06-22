import { Router } from "express"
import { getDados } from "../controllers/getDadosC";



const getR = Router()


getR.get("/passengers/travels", getDados);

export default getR;