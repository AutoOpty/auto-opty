import * as Yup from "yup";

export const dashboardCreateFormSchema = Yup.object({
    article: Yup.string()
        .required("Артикул це обовʼязкове поле")
        .test({
            name: "article",
            test(value, ctx) {
                // console.log('this.options:', this.options)
                const listOfArticles = this.options.context;
                if (listOfArticles.includes(String(value)) && value) {
                    return ctx.createError({
                        message: "Такий артикул вже існує !",
                    });
                }

                return true;
            },
        }),
    title: Yup.string()
        .required("Назва це обовʼязкове поле"),
    titleEn: Yup.string()
        .required("Назва англійською це обовʼязкове поле"),
    brand: Yup.string()
        .required("Бренд це обовʼязкове поле"),
    photos: Yup.array()
        .min(1, "Мінімум одна фотографія")
        .required("Фото це обовʼязкове поле"),
    description: Yup.string()
        .required("Опис це обовʼязкове поле"),
    descriptionEn: Yup.string()
        .required("Опис англійською це обовʼязкове поле"),
    side: Yup.string()
        .required("Сторона це обовʼязкове поле"),
    price: Yup.number()
        .moreThan(-1, "Тільки додатні числа")
        .typeError("Тільки числа")
        .required("Ціна це обовʼязкове поле"),
    carBrand: Yup.string()
        .required("Марка авто це обовʼязкове поле"),
    carModels: Yup.string()
        .required("Моделі авто це обовʼязкове поле"),
    carBodies: Yup.array()
        .min(1, "Мінімум один варіант")
        .required("Кузови це обовʼязкове поле"),
    installedFrom: Yup.number()
        .moreThan(-1, "Тільки додатні числа")
        .typeError("Тільки числа")
        .required("Початок використання це обовʼязкове поле"),
    installedUntil: Yup.number()
        .moreThan(-1, "Тільки додатні числа")
        .typeError("Тільки числа")
        .required("Кінець використання це обовʼязкове поле"),
})