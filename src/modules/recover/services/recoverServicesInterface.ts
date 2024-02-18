import { RecoverProductDTO} from "../dtos/recoverProductDTO";
import { RecoverProduct } from "../models/recoverModel";

export interface IRecoverProductService {
    addRecoverTransaction(dataTransaction: RecoverProductDTO): Promise<RecoverProduct>
    getAllRecoverTransaction(): Promise<Array<RecoverProduct>>
}