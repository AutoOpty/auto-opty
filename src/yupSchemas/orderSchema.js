import * as Yup from "yup";

const regexPhone = /^\+\d{12}$/;


export const orderSchema = Yup.object({
    userName: Yup.string()
        .min(3, "Занадто коротке ім’я")
        .max(29, "Занадто довге ім’я")
        .required("Заповніть це поле"),
    phone: Yup.string()
        .matches(regexPhone, "+380123456789")
        .required("Заповніть це поле"),
    postOfficeNumber: Yup.number()
        .moreThan(-1, "Тільки додатні числа")
        .typeError("Тільки числа"),
    itemNumber: Yup.number()
        .moreThan(-1, "Тільки додатні числа")
        .typeError("Тільки числа"),
    sendDate: Yup.date()
        .nullable(),
})
