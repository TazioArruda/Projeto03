import { Request, Response } from "express";
import { AuthControllerInterface } from "./controllerInterfaceAuth";
import { AuthServiceInterface } from "../services/serviceInterfaceAuth";
import { validatorAuth } from "../validations/validatorAuth";
import { userValidatorRegister } from "../validations/UserValidatorRegister";






export class AuthController implements AuthControllerInterface {
    constructor(private authService: AuthServiceInterface) { }

    async auth(req: Request, res: Response): Promise<void> {
        try {
            const { email, password } = req.body
            await validatorAuth.validate({ email: email, password: password }, { abortEarly: true })
            const userData = await this.authService.auth({ email: email, password: password })
                       res.status(200).json({ user: userData?.user, token: userData?.token })
        } catch (error: any) {
            res.status(500).json({ error: error.message });

        }
    }

    async registerUser(req: Request, res: Response): Promise<void> {
        try {
            const { body } = req
            await userValidatorRegister.validate(body, { abortEarly: true })
            const user = await this.authService.registerUser(body)
            res.status(201).json(user)
        } catch (error: any) {
            res.status(500).json({ error: error.message });
        }
    }

    async loggedUser(req: Request, res: Response): Promise<void> {

        try {
            const { authorization } = req.headers
            const [, token]: any = authorization?.split(" ")
            const user = await this.authService.loggedUser(token)
            res.status(200).json({ message: "aqui", user })
        } catch (error: any) {
            res.status(500).json({ error: error.message })
        }

    }


}
