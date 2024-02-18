import { Router } from "express";
import { authModule } from "../factories/factoryAuth";
export const routesAuth = Router()

routesAuth.post('/auth', authModule.auth.bind(authModule))
routesAuth.post('/register-user', authModule.registerUser.bind(authModule))
routesAuth.get('/get-logged-user', authModule.loggedUser.bind(authModule))
