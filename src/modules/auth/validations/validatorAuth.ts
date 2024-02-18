import * as yup from "yup";


export const validatorAuth = yup.object({
    email: yup.string().required('email is required').email('inavaled email format'),
    password: yup.string().required('password is required')
})