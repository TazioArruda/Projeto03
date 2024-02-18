import { Router } from "express";
import { userModule } from "../factories/factoriesUser";
import { authentication_middleware } from "../../../config/authentication_middleware";
import { authorization_middleware } from "../../../config/authorization_middleware";



export const routesUser = Router();

routesUser.get("/user/:id", authentication_middleware.check, userModule.getUserById.bind(userModule));

routesUser.put("/user/update/:id", authentication_middleware.check, userModule.updateUser.bind(userModule));

routesUser.get("/users", authentication_middleware.check, authorization_middleware.checkAdmin, userModule.getAll.bind(userModule));

routesUser.put("/user/delete/:id", authentication_middleware.check, authorization_middleware.checkAdmin, userModule.softDelete.bind(userModule));

routesUser.put("/admin/send-gems/:id", authentication_middleware.check, authorization_middleware.checkAdmin, userModule.sendGems.bind(userModule));


