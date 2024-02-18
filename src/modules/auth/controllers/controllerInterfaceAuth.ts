import { Request, Response } from "express";


export interface AuthControllerInterface {
    auth(req: Request, res: Response): Promise<void>;
    registerUser(req: Request, res: Response): Promise<void>;
    loggedUser(req: Request, res: Response): Promise<void>;

}