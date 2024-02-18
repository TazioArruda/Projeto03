import { RecoverProductController } from "../controller/recoverController"
import { recoverModel } from "../models/recoverModel"
import { RecoverProductRepo } from "../repo/recoverRepo"
import { RecoverProductService } from "../services/recoverServices"





class RecoverProductFactory {
    static getInstance() {
        const recoverProductRepo = new RecoverProductRepo(recoverModel)
        const recoverProductService = new RecoverProductService(recoverProductRepo)
        const recoverProductController = new RecoverProductController(recoverProductService)
        return recoverProductController
    }
}

export const recoverProductModule = RecoverProductFactory.getInstance()