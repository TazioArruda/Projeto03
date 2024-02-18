import { Router } from "express";
import { authentication_middleware } from "../../../config/authentication_middleware";
import { recoverProductModule } from "../factories/recoverFactory";



export const recoverProductRoutes = Router()


recoverProductRoutes.post('/recover-product', authentication_middleware.check, recoverProductModule.addRecoverTransaction.bind(recoverProductModule))
recoverProductRoutes.get("/list-acquisition-product", authentication_middleware.check, recoverProductModule.getAllRecoverAcquisition.bind(recoverProductModule))