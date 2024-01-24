"use client";

import { useEffect, useContext } from "react";
import { useTranslation } from "react-i18next";
import {
    Formik,
    Form,
    Field,
    ErrorMessage,
    validateYupSchema,
    yupToFormErrors,
} from "formik";
import { SiteContext } from "@/context/SiteContext";
import { orderSchema } from "@/yupSchemas/orderSchema";
import { useFetcherProductsArticles } from "@/hooks/useFetcher";
import CustomDatePicker from "./CustomDatePicker";
import SuccessContent from "./SuccessContent";
import Select from "./Select";

import styles from "./OrderForm.module.scss";

const initialValues = {
    userName: "",
    phone: "",
    sendDate: null,
    postOfficeNumber: "",
    itemNumber: "",
    paymentMethod: "",
};

const handleSubmit = (values, actions, closeModal) => {
    console.log("OrderFormData:", values);
    actions.setSubmitting(true);

    setTimeout(() => {
        closeModal();
        setTimeout(() => {
            actions.resetForm();
            actions.setSubmitting(false);
        }, 300);
    }, 3000);
};

const OrderForm = () => {
    const { isModalOpen, closeModal } = useContext(SiteContext);
    const { t } = useTranslation();
    useEffect(() => {
        if (isModalOpen) {
            document.body.style.overflow = "hidden";
        }
        return () => {
            document.body.style.overflow = "unset";
        };
    }, [isModalOpen]);

    const listOfProductsArticles = useFetcherProductsArticles();

    return (
        <Formik
            initialValues={initialValues}
            validate={(values) => {
                try {
                    validateYupSchema(
                        values,
                        orderSchema,
                        true,
                        listOfProductsArticles
                    );
                } catch (err) {
                    return yupToFormErrors(err); //for rendering validation errors
                }

                return {};
            }}
            onSubmit={(values, actions) => {
                handleSubmit(values, actions, closeModal);
            }}
        >
            {(formik) => {
                const {
                    errors,
                    touched,
                    isValid,
                    values,
                    isSubmitting,
                    setFieldValue,
                } = formik;

                return (
                    <div className={styles.container}>
                        <button
                            onClick={closeModal}
                            className={styles.closeBtn}
                        >
                            <svg className={styles.iconBtnClose}>
                                <use href='/sprite.svg#close' />
                            </svg>
                        </button>
                        <h2 className={styles.title}>Auto Opti</h2>

                        {isSubmitting ? (
                            <SuccessContent closeModal={closeModal} />
                        ) : (
                            <Form className={styles.form}>
                                <div className={styles.innerWrap}>
                                    <div className={styles.wrapError}>
                                        <svg className={styles.icon}>
                                            <use href='/sprite.svg#icon-user' />
                                        </svg>
                                        <Field
                                            type='text'
                                            name='userName'
                                            id='userName'
                                            placeholder={t("Form.name")}
                                            autoComplete='off'
                                            maxLength='30'
                                            className={
                                                errors.userName &&
                                                touched.userName
                                                    ? `${styles.input} ${styles.inputError}`
                                                    : styles.input
                                            }
                                        />
                                        <ErrorMessage
                                            name='userName'
                                            className={styles.error}
                                            component='p'
                                        />
                                    </div>
                                    <div className={styles.wrapError}>
                                        <svg className={styles.icon}>
                                            <use href='/sprite.svg#icon-phone' />
                                        </svg>
                                        <Field
                                            type='text'
                                            name='phone'
                                            id='phone'
                                            placeholder={t("Form.phone")}
                                            autoComplete='off'
                                            maxLength='14'
                                            className={
                                                errors.phone && touched.phone
                                                    ? `${styles.input} ${styles.inputError}`
                                                    : styles.input
                                            }
                                        />
                                        <ErrorMessage
                                            name='phone'
                                            className={styles.error}
                                            component='p'
                                        />
                                    </div>
                                </div>
                                <div className={styles.innerWrap}>
                                    <div className={styles.wrapError}>
                                        <svg
                                            className={`${styles.icon} ${styles.iconPicker}`}
                                        >
                                            <use href='/sprite.svg#icon-calendar' />
                                        </svg>
                                        <svg
                                            className={`${styles.icon} ${styles.iconPickerRight}`}
                                        >
                                            <use href='/sprite.svg#icon-chevron-down' />
                                        </svg>
                                        <CustomDatePicker
                                            name='sendDate'
                                            value={values.sendDate}
                                            onChange={setFieldValue}
                                        />

                                        <ErrorMessage
                                            name='sendDate'
                                            className={styles.error}
                                            component='p'
                                        />
                                    </div>

                                    <div className={styles.wrapError}>
                                        <svg
                                            className={`${styles.icon} ${styles.iconPicker}`}
                                        >
                                            <use href='/sprite.svg#envelop' />
                                        </svg>

                                        <Field
                                            type='text'
                                            name='postOfficeNumber'
                                            id='postOfficeNumber'
                                            placeholder={t("Form.postOffice")}
                                            autoComplete='off'
                                            maxLength='30'
                                            className={
                                                errors.postOfficeNumber &&
                                                touched.postOfficeNumber
                                                    ? `${styles.input} ${styles.inputError}`
                                                    : styles.input
                                            }
                                        />
                                        <ErrorMessage
                                            name='postOfficeNumber'
                                            className={styles.error}
                                            component='p'
                                        />
                                    </div>
                                </div>
                                <div className={styles.innerWrap}>
                                    <div className={styles.wrapError}>
                                        <svg className={styles.icon}>
                                            <use href='/sprite.svg#icon-hash' />
                                        </svg>

                                        <Field
                                            type='text'
                                            name='itemNumber'
                                            id='itemNumber'
                                            autoComplete='off'
                                            maxLength='30'
                                            placeholder='Номер запчастини'
                                            className={
                                                errors.itemNumber &&
                                                touched.itemNumber
                                                    ? `${styles.input} ${styles.inputError}`
                                                    : styles.input
                                            }
                                        />
                                        <ErrorMessage
                                            name='itemNumber'
                                            className={styles.error}
                                            component='p'
                                        />
                                    </div>
                                    <div className={styles.wrapError}>
                                        <svg className={styles.icon}>
                                            <use href='/sprite.svg#credit-card' />
                                        </svg>

                                        <Field
                                            name='paymentMethod'
                                            as={Select}
                                        />
                                    </div>
                                    <p className={styles.explainText}>
                                        * - поле, обовʼязкове для заповнення
                                    </p>
                                </div>

                                <button
                                    disabled={!isValid}
                                    type='submit'
                                    className={
                                        isValid
                                            ? `${styles.button} ${styles.activeBtn}`
                                            : styles.button
                                    }
                                >
                                    Забронювати
                                </button>
                            </Form>
                        )}
                    </div>
                );
            }}
        </Formik>
    );
};

export default OrderForm;
