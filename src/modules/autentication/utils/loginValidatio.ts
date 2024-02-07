import * as yup from "yup"


export const loginValidation = yup.object({

    email: yup.string().required("EMAIL IS REQUIRED!").email("INVALID FORMAT EMAIL"),
    password: yup.string().required("PASSWORD IS RIQUIRED!")

})