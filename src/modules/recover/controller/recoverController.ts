import { Request, Response } from "express";
import { IRecoverProductService} from "../services/recoverServicesInterface";
import { IRecoverProductController } from "./recoverControllerInterface";
import { addRecoverTransactioValidator } from "../utils/addRecoverTransactioValidator";


export class RecoverProductController implements IRecoverProductController {
    constructor(private recoverService: IRecoverProductService) { }


    async addRecoverTransaction(req: Request, res: Response): Promise<void> {
        try {
            const { body } = req;
            await addRecoverTransactioValidator.validate(body, { abortEarly: true });
            const recoverTransaction = await this.recoverService.addRecoverTransaction(body)
            res.status(201).json(recoverTransaction);
        } catch (error: any) {
            res.status(500).json({ message: error.message });
        }
    }
    async getAllRecoverAcquisition(req: Request, res: Response): Promise<void> {
        try {
            const recoverAcquisition = await this.recoverService.getAllRecoverTransaction()
            res.status(200).json(recoverAcquisition)
        } catch (error: any) {
            res.status(500).json({ message: error.message });

        }
    }
}