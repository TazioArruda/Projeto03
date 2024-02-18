import * as yup from "yup"

export const addRecoverTransactioValidator = yup.object({
    userID: yup.string().required('User ID is required'),
    productID: yup.string().required('Product ID is required'),
})