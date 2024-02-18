import { RecoverProductDTO } from "../dtos/recoverProductDTO"
import { RecoverProduct } from "../models/recoverModel"




export interface IRecoverRepo {
    addRecoverTransaction(dataTransaction: RecoverProductDTO): Promise<RecoverProduct | null>
    getAllRecoverTransaction(): Promise<Array<RecoverProduct>>
}