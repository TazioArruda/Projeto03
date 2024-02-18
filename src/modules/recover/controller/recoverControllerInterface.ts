import { Request, Response } from "express";

export interface IRecoverProductController {
    addRecoverTransaction(req: Request, res: Response): Promise<void>
    getAllRecoverAcquisition(req: Request, res: Response): Promise<void>
}