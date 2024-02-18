import { isValidObjectId } from "mongoose";

import { ProductModel } from "../../product/models/productModel";
import { IRecoverRepo } from "../repo/recoverRepoInterface";
import { IRecoverProductService } from "./recoverServicesInterface";
import { RecoverProductDTO } from "../dtos/recoverProductDTO";
import { RecoverProduct } from "../models/recoverModel";
import { UserModel } from "../../user/models/modelUser";



export class RecoverProductService implements IRecoverProductService {
    constructor(private recoverRepo: IRecoverRepo) { }

    async addRecoverTransaction(dataTransaction: RecoverProductDTO): Promise<RecoverProduct> {
        const { userID, productID } = dataTransaction
        if (!(isValidObjectId(userID) && isValidObjectId(productID))) throw new Error('userID or productID is not found!')

        const user = await UserModel.findById(userID)
        const product = await ProductModel.findById(productID)

        if (!user) throw new Error('user not found')
        if (!product) throw new Error('product not found')
        if (user.gems < product.value) throw new Error("User has no Gems!")
        user.gems -= product.value;
        await user.save()
        const recoverFull = {
            ...dataTransaction
        }

        recoverFull.nameUser = user.name
        recoverFull.nameProduct = product.name
        recoverFull.productValue = product.value

        const recoverTransaction = await this.recoverRepo.addRecoverTransaction(recoverFull)
        if (!recoverTransaction) throw new Error("Error register transaction")

        return recoverTransaction
    }

    async getAllRecoverTransaction(): Promise<RecoverProduct[]> {
        const acquisition = await this.recoverRepo.getAllRecoverTransaction()
        if (!acquisition || acquisition.length === 0) throw new Error('Recover Product not found!')
        return acquisition
    }
}