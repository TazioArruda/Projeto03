import { InferSchemaType, Model, Schema, model } from "mongoose";



const recoverProductSchema = new Schema({
    userID: {
        type: String,
        required: true,
    },
    productID: {
        type: String,
        required: true,
    },
    nameUser: {
        type: String,
        required: true,
    },
    nameProduct: {
        type: String,
        required: true,
    },
    productValue: {
        type: Number,
        required: true,
    }
}

)

export type RecoverProduct = InferSchemaType<typeof recoverProductSchema>

export const recoverModel: Model<RecoverProduct> = model('recoverProduct', recoverProductSchema)