import { CldUploadButton } from "next-cloudinary";
import {
  Formik,
  Form,
  Field,
  ErrorMessage,
  validateYupSchema,
  yupToFormErrors,
} from "formik";
import { toast } from "react-toastify";
import { dashboardCreateFormSchema } from "@/yupSchemas/dashboardCreateFormSchema";
import { useFetcherProductsArticles } from "@/hooks/useFetcher";
import { GetData } from "@/fetch/clientFetch";
import styles from "./dashboardCreateForm.module.scss";

const DashboardCreateForm = () => {
  const initialValues = {
    article: "",
    title: "",
    brand: "",
    photos: [],
    description: "",
    side: "",
    price: "",
    carBrand: "",
    carModels: [],
    carBodies: [],
    installedFrom: "",
    installedUntil: "",
  };

  const handleSubmit = async (values, actions) => {
    const models = values.carModels.split(",");
    values.carModels = models;

    try {
      await fetch("/api/products", {
        method: "POST",
        body: JSON.stringify(values),
      });
      // автоматично обновлює строрінку при зміні кількості карточок
      mutate();
      // обнуляє форму
      actions.resetForm();
      toast.success(`Нову картку: ${values.article} створено.`);
    } catch (err) {
      console.log(err);
      toast.error("Помилка! Картка не створена.");
    }
  };

  const listOfProductsArticles = useFetcherProductsArticles();

  const { mutate } = GetData();

  return (
    <Formik
      initialValues={initialValues}
      validate={(values) => {
        try {
          validateYupSchema(
            values,
            dashboardCreateFormSchema,
            true,
            listOfProductsArticles
          );
        } catch (err) {
          return yupToFormErrors(err); //for rendering validation errors
        }

        return {};
      }}
      onSubmit={(values, actions) => {
        handleSubmit(values, actions);
      }}
    >
      {(formik) => {
        const { isValid, values, setFieldValue } = formik;

        return (
          <Form className={styles.createForm}>
            <h1>Додавання нової картки</h1>

            <label htmlFor="article">Артикул:</label>
            <ErrorMessage
              name="article"
              className={styles.error}
              component="p"
            />
            <Field
              type="text"
              id="article"
              name="article"
              maxLength="30"
              placeholder="123xjg135jk"
              className={styles.input}
            />

            <label htmlFor="title">Назва:</label>
            <ErrorMessage name="title" className={styles.error} component="p" />
            <Field
              type="text"
              name="title"
              id="title"
              maxLength="40"
              placeholder="Передня фара"
              className={styles.input}
            />

            <label htmlFor="brand">Бренд:</label>
            <ErrorMessage name="brand" className={styles.error} component="p" />
            <Field
              type="text"
              name="brand"
              id="brand"
              maxLength="40"
              placeholder="Hella"
              className={styles.input}
            />

            <ErrorMessage
              name="photos"
              className={styles.error}
              component="p"
            />
            <CldUploadButton
              name="photos"
              className={styles.uploadBtn}
              onUpload={(result) => {
                setFieldValue("photos", [
                  ...values.photos,
                  result.info.public_id,
                ]);
              }}
              uploadPreset="unsigned_preset"
            >
              Завантажити фото (тільки .WEBP)
            </CldUploadButton>

            <label htmlFor="description">Опис:</label>
            <ErrorMessage
              name="description"
              className={styles.error}
              component="p"
            />
            <Field
              type="text"
              name="description"
              id="description"
              maxLength="200"
              placeholder="Фара з електроприводом."
              className={styles.input}
            />

            <ErrorMessage name="side" className={styles.error} component="p" />
            <fieldset className={styles.side}>
              <legend>Сторона:</legend>
              <Field type="radio" id="left" name="side" value="Ліва" />
              <label htmlFor="left">Ліва</label>
              <Field type="radio" id="right" name="side" value="Права" />
              <label htmlFor="right">Права</label>
              <Field type="radio" id="both" name="side" value="Обидві" />
              <label htmlFor="both">Обидві</label>
            </fieldset>

            <label htmlFor="price">Ціна:</label>
            <ErrorMessage name="price" className={styles.error} component="p" />
            <Field
              type="text"
              name="price"
              id="price"
              maxLength="10"
              placeholder="2548"
              className={styles.input}
            />

            <label htmlFor="carBrand">Марка авто:</label>
            <ErrorMessage
              name="carBrand"
              className={styles.error}
              component="p"
            />
            <Field
              type="text"
              name="carBrand"
              id="carBrand"
              maxLength="30"
              placeholder="Opel"
              className={styles.input}
            />

            <label htmlFor="carModels">Моделі авто:</label>
            <ErrorMessage
              name="carModels"
              className={styles.error}
              component="p"
            />
            <Field
              type="text"
              name="carModels"
              id="carModels"
              maxLength="100"
              placeholder="Zafira,Astra,Vectra,Ascona"
              className={styles.input}
            />

            <label htmlFor="carBodies">Кузови авто:</label>
            <ErrorMessage
              name="carBodies"
              className={styles.error}
              component="p"
            />
            <Field
              type="text"
              name="carBodies"
              id="carBodies"
              maxLength="200"
              placeholder="Sedan"
              className={styles.input}
            />

            <label htmlFor="installedFrom">Початок використання:</label>
            <ErrorMessage
              name="installedFrom"
              className={styles.error}
              component="p"
            />
            <Field
              type="text"
              name="installedFrom"
              id="installedFrom"
              maxLength="4"
              placeholder="2014"
              className={styles.input}
            />

            <label htmlFor="installedUntil">Кінець використання:</label>
            <ErrorMessage
              name="installedUntil"
              className={styles.error}
              component="p"
            />
            <Field
              type="text"
              name="installedUntil"
              id="installedUntil"
              maxLength="4"
              placeholder="2018"
              className={styles.input}
            />

            <button
              type="submit"
              disabled={!isValid}
              className={
                isValid ? `${styles.button} ${styles.sendBtn}` : styles.button
              }
            >
              Створити нову картку
            </button>
          </Form>
        );
      }}
    </Formik>
  );
};

export default DashboardCreateForm;
