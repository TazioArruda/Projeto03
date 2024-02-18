import { NextFunction, Request, Response } from "express";
import jwt from 'jsonwebtoken';
import "dotenv/config"





export class authentication_middleware {
    static async check(req: Request, res: Response, next: NextFunction): Promise<void> {
        const { authorization } = req.headers

        try {
            if (!authorization) {
                throw new Error('Invalid authorization')
            }

            const [, token] = authorization.split(" ")

           jwt.verify(token, process.env.JWT_SECRET as string)
          

            return next()

        } catch (erro: any) {
            res.status(401).json({ mensage: 'access unauthorization', error: erro.message })

        }


    }
}