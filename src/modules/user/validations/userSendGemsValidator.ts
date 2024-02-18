import * as  yup from 'yup'

export const userSendGemsValidator = yup.object({
    sendGems: yup.number().max(100, 'Maximum balance at a time is 100 gems!').required('no value was reported!').positive('Negative values are not allowed!').integer('Float values are not allowed!')
})