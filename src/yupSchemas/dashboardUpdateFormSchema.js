import * as Yup from "yup";

export const dashboardUpdateFormSchema = Yup.object({
    newTitle: Yup.string()
        .required("Назва це обовʼязкове поле"),
    newTitleEn: Yup.string()
        .required("Назва англійською це обовʼязкове поле"),
    newBrand: Yup.string()
        .required("Бренд це обовʼязкове поле"),
    newPhotos: Yup.array()
        .min(1, "Мінімум одна фотографія")
        .required("Фото це обовʼязкове поле"),
    newDescription: Yup.string()
        .required("Опис це обовʼязкове поле"),
    newDescriptionEn: Yup.string()
        .required("Опис англійською це обовʼязкове поле"),
    newSide: Yup.string()
        .required("Сторона це обовʼязкове поле"),
    newPrice: Yup.number()
        .moreThan(-1, "Тільки додатні числа")
        .typeError("Тільки числа")
        .required("Ціна це обовʼязкове поле"),
    newCarBrand: Yup.string()
        .required("Марка авто це обовʼязкове поле"),
    newCarModels: Yup.string()
        .required("Моделі авто це обовʼязкове поле"),
    newCarBodies: Yup.array()
        .required("Кузови це обовʼязкове поле"),
    newInstalledFrom: Yup.number()
        .moreThan(-1, "Тільки додатні числа")
        .typeError("Тільки числа")
        .required("Початок використання це обовʼязкове поле"),
    newInstalledUntil: Yup.number()
        .moreThan(-1, "Тільки додатні числа")
        .typeError("Тільки числа")
        .required("Кінець використання це обовʼязкове поле"),
})