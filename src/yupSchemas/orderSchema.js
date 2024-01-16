import * as Yup from "yup";

import i18n from 'i18next';

const regexPhone = /^\+\d{12}$/;

// const initialValues = {
//     userName: "",
//     phone: "",
//     sendDate: "",
//     postOfficeNumber: "",
//     itemNumber: "",
//     paymentMethod: "",
// };

export const orderSchema = Yup.object({
    userName: Yup.string()
        .min(3, "Too short")
        .max(29, "Too long"),
    phone: Yup.string()
        .matches(regexPhone, "+380123456789")
        .required("Format is not correct"),
    postOfficeNumber: Yup.number()
        .moreThan(-1, "Only positive numbers")
        .typeError("Only numbers"),
    itemNumber: Yup.number()
        .moreThan(-1, "Only positive numbers")
        .typeError("Only numbers"),
    sendDate: Yup.date()
        .nullable(),


})
