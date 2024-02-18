import { Router } from "express"
import { routesAuth } from "./modules/auth/routes/routesAuth"
import { routesUser } from "./modules/user/routes/routesUser"
import { recoverProductRoutes } from "./modules/recover/routes/recoverRoutes"
import { productRoutes } from "./modules/product/routes/productRoutes"



export const router = Router()

router.use(routesAuth)
router.use(routesUser)
router.use(recoverProductRoutes)
router.use(productRoutes)