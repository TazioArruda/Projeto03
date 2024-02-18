import { NextFunction, Request, Response } from "express";

import jwt from 'jsonwebtoken'
import { User } from "../modules/user/models/modelUser";


export class authorization_middleware {
    static async checkAdmin(req: Request, res: Response, next: NextFunction): Promise<void> {
        const { authorization } = req.headers

        try {
            if (!authorization) {
                throw new Error('Invalid authorization')
            }
            const [, token] = authorization.split(" ")

            const userData: any = jwt.verify(token, process.env.JWT_SECRET as string)
            const user: User = { ...userData._doc }
            if (user.typeUser !== 'admin') throw new Error(`${user.typeUser} not permission to access`)
            return next()

        } catch (erro: any) {
            res.status(401).json({ message: 'access unauthorization', error: erro.message })

        }

    }
}