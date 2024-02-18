
import { Model } from "mongoose";
import { RecoverProduct } from "../models/recoverModel";
import { IRecoverRepo } from "./recoverRepoInterface";
import { RecoverProductDTO } from "../dtos/recoverProductDTO";



export class RecoverProductRepo implements IRecoverRepo {
    constructor(private recoverModel: Model<RecoverProduct>) { }

    async addRecoverTransaction(dataTransaction: RecoverProductDTO): Promise<RecoverProduct | null> {
        const transaction = await this.recoverModel.create(dataTransaction);
        return transaction
    }

    async getAllRecoverTransaction(): Promise<RecoverProduct[]> {
        const acquisition = await this.recoverModel.find()
        return acquisition
    }

}