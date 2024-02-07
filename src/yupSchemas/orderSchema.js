import * as Yup from "yup";
import i18n from 'i18next';
const regexPhone = /^\+\d{12}$/;


export const getOrderSchema =()=>{

    return Yup.object( 
    {
        userName: Yup.string()
        .min(3, i18n.t('Form.ErrorShortName'))
        .max(29,i18n.t('Form.ErrorLongName'))
        .required(i18n.t('Form.FieldRequiredMsg')),
    phone: Yup.string()
        .matches(regexPhone, "+380123456789")
        .required(i18n.t('Form.FieldRequiredMsg')),
    postOfficeNumber: Yup.number()
        .moreThan(-1, i18n.t('Form.ErrorNumberOfObject2'))
        .typeError(i18n.t('Form.ErrorNumberOfObject3')),
    itemNumber: Yup.string()
        .test({
            name: "itemNumber",
            test(value, ctx) {
                // console.log('this.options:', this.options)
                const listOfArticles = this.options.context;
                if (!listOfArticles.includes(String(value)) && value) {
                    return ctx.createError({
                        message: i18n.t('Form.ErrorNumberOfObject'),
                    });
                }

                return true;
            },
        }),
    sendDate: Yup.date()
        .nullable(),
})}
