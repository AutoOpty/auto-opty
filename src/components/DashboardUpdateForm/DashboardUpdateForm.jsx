"use client";

import { CldUploadButton } from "next-cloudinary";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { toast } from "react-toastify";
import { dashboardUpdateFormSchema } from "@/yupSchemas/dashboardUpdateFormSchema";
import { handleDeleteImgFromCloudinary } from "@/helpers/handleDeleteImgFromCloudinary";
import { isDeepEqual } from "@/helpers/deepEqual";
import styles from "./DashboardUpdateForm.module.scss";

const DashboardUpdateForm = ({ id, data, mutate }) => {
  const {
    article,
    title,
    brand,
    photos,
    description,
    side,
    price,
    carBrand,
    carModels,
    carBodies,
    installedFrom,
    installedUntil,
  } = data;

  const currentValues = {
    article,
    title,
    brand,
    photos,
    description,
    side,
    price,
    carBrand,
    carModels,
    carBodies,
    installedFrom,
    installedUntil,
  };

  const carModelsString = carModels.join(",");

  const initialValues = {
    newArticle: article,
    newTitle: title,
    newBrand: brand,
    newPhotos: photos,
    newDescription: description,
    newSide: side,
    newPrice: price,
    newCarBrand: carBrand,
    newCarModels: carModelsString,
    newCarBodies: carBodies,
    newInstalledFrom: installedFrom,
    newInstalledUntil: installedUntil,
  };

  const handleSubmit = async (values, actions) => {
    const {
      newArticle,
      newTitle,
      newBrand,
      newPhotos,
      newDescription,
      newSide,
      newPrice,
      newCarBrand,
      newCarModels,
      newCarBodies,
      newInstalledFrom,
      newInstalledUntil,
    } = values;

    const newCarModelsArray = newCarModels.split(",");

    const updatedValues = {
      article: newArticle,
      title: newTitle,
      brand: newBrand,
      photos: newPhotos,
      description: newDescription,
      side: newSide,
      price: newPrice,
      carBrand: newCarBrand,
      carModels: newCarModelsArray,
      carBodies: newCarBodies,
      installedFrom: newInstalledFrom,
      installedUntil: newInstalledUntil,
    };

    if (isDeepEqual(currentValues, updatedValues)) {
      toast.warning(`Ви не внесли змін в картку ${article}`);
      return;
    }

    try {
      await fetch(`/api/products/${id}`, {
        method: "PUT",
        body: JSON.stringify(updatedValues),
      });
      // автоматично обновлює строрінку при зміні кількості карточок
      mutate();
      // обнуляє форму
      actions.resetForm();
      toast.success(`Дані картки ${article} оновлено`);
    } catch (err) {
      console.log(err);
      toast.error(`Помилка! Картка ${article} не оновлена`);
    }
  };

  return (
    <div className={styles.formWrapper}>
      <Formik
        enableReinitialize={true}
        initialValues={initialValues}
        validationSchema={dashboardUpdateFormSchema}
        onSubmit={(values, actions) => {
          handleSubmit(values, actions);
        }}
      >
        {(formik) => {
          const { isValid, values, setFieldValue } = formik;

          return (
            <Form className={styles.new}>
              <h1>Редагування картки {article}</h1>
              <label htmlFor="newTitle">Назва:</label>
              <ErrorMessage
                name="newTitle"
                className={styles.error}
                component="p"
              />
              <Field
                type="text"
                name="newTitle"
                id="newTitle"
                maxLength="40"
                value={values.newTitle}
                className={styles.input}
              />

              <label htmlFor="newBrand">Бренд:</label>
              <ErrorMessage
                name="newBrand"
                className={styles.error}
                component="p"
              />
              <Field
                type="text"
                name="newBrand"
                id="newBrand"
                maxLength="40"
                value={values.newBrand}
                className={styles.input}
              />

              <ErrorMessage
                name="newPhotos"
                className={styles.error}
                component="p"
              />
              <CldUploadButton
                name="newPhotos"
                className={styles.uploadBtn}
                onUpload={(result) => {
                  setFieldValue("newPhotos", [
                    ...values.newPhotos,
                    result.info.public_id,
                  ]);
                }}
                uploadPreset="unsigned_preset"
              >
                Завантажити фото (тільки .WEBP)
              </CldUploadButton>

              <label htmlFor="newDescription">Опис:</label>
              <ErrorMessage
                name="newDescription"
                className={styles.error}
                component="p"
              />
              <Field
                type="text"
                name="newDescription"
                id="newDescription"
                maxLength="200"
                value={values.newDescription}
                className={styles.input}
              />

              <ErrorMessage
                name="newSide"
                className={styles.error}
                component="p"
              />
              <fieldset className={styles.side}>
                <legend>Сторона:</legend>
                <Field type="radio" id="left" name="newSide" value="L" />
                <label htmlFor="left">L</label>
                <Field type="radio" id="right" name="newSide" value="R" />
                <label htmlFor="right">R</label>
                <Field type="radio" id="both" name="newSide" value="L+R" />
                <label htmlFor="both">L+R</label>
              </fieldset>

              <label htmlFor="newPrice">Ціна:</label>
              <ErrorMessage
                name="newPrice"
                className={styles.error}
                component="p"
              />
              <Field
                type="text"
                name="newPrice"
                id="newPrice"
                maxLength="10"
                value={values.newPrice}
                className={styles.input}
              />

              <label htmlFor="newCarBrand">Марка авто:</label>
              <ErrorMessage
                name="newCarBrand"
                className={styles.error}
                component="p"
              />
              <Field
                type="text"
                name="newCarBrand"
                id="newCarBrand"
                maxLength="30"
                value={values.newCarBrand}
                className={styles.input}
              />

              <label htmlFor="newCarModels">Моделі авто:</label>
              <ErrorMessage
                name="newCarModels"
                className={styles.error}
                component="p"
              />
              <Field
                type="text"
                name="newCarModels"
                id="newCarModels"
                maxLength="100"
                value={values.newCarModels}
                className={styles.input}
              />

              <fieldset className={styles.carBodies}>
                <legend>Кузови авто:</legend>
                <label htmlFor="sedan">
                  <Field
                    type="checkbox"
                    id="sedan"
                    name="newCarBodies"
                    value="Sedan"
                  />
                  Sedan
                </label>
                <label htmlFor="coupe">
                  <Field
                    type="checkbox"
                    id="coupe"
                    name="newCarBodies"
                    value="Coupe"
                  />
                  Coupe
                </label>
                <label htmlFor="sportsCar">
                  <Field
                    type="checkbox"
                    id="sportsCar"
                    name="newCarBodies"
                    value="Sports car"
                  />
                  Sports car
                </label>
                <label htmlFor="stationWagon">
                  <Field
                    type="checkbox"
                    id="stationWagon"
                    name="newCarBodies"
                    value="Station Wagon"
                  />
                  Station Wagon
                </label>
                <label htmlFor="hatchback">
                  <Field
                    type="checkbox"
                    id="hatchback"
                    name="newCarBodies"
                    value="Hatchback"
                  />
                  Hatchback
                </label>
                <label htmlFor="suv">
                  <Field
                    type="checkbox"
                    id="suv"
                    name="newCarBodies"
                    value="Sport-Utility Vehicle (SUV)"
                  />
                  Sport-Utility Vehicle (SUV)
                </label>
                <label htmlFor="minivan">
                  <Field
                    type="checkbox"
                    id="minivan"
                    name="newCarBodies"
                    value="Minivan"
                  />
                  Minivan
                </label>
                <label htmlFor="pickupTruck">
                  <Field
                    type="checkbox"
                    id="pickupTruck"
                    name="newCarBodies"
                    value="Pickup Truck"
                  />
                  Pickup Truck
                </label>
                <label htmlFor="cov">
                  <Field
                    type="checkbox"
                    id="cov"
                    name="newCarBodies"
                    value="Cross Over Vehicle (CUV)"
                  />
                  Cross Over Vehicle (CUV)
                </label>
                <label htmlFor="convertible">
                  <Field
                    type="checkbox"
                    id="convertible"
                    name="newCarBodies"
                    value="Convertible"
                  />
                  Convertible
                </label>
                <label htmlFor="van">
                  <Field
                    type="checkbox"
                    id="van"
                    name="newCarBodies"
                    value="Van"
                  />
                  Van
                </label>
              </fieldset>

              <label htmlFor="newInstalledFrom">Початок використання:</label>
              <ErrorMessage
                name="newInstalledFrom"
                className={styles.error}
                component="p"
              />
              <Field
                type="text"
                name="newInstalledFrom"
                id="newInstalledFrom"
                maxLength="4"
                value={values.newInstalledFrom}
                className={styles.input}
              />

              <label htmlFor="newInstalledUntil">Кінець використання:</label>
              <ErrorMessage
                name="newInstalledUntil"
                className={styles.error}
                component="p"
              />
              <Field
                type="text"
                name="newInstalledUntil"
                id="newInstalledUntil"
                maxLength="4"
                value={values.newInstalledUntil}
                className={styles.input}
              />

              <button
                type="submit"
                disabled={!isValid}
                className={
                  isValid ? `${styles.button} ${styles.sendBtn}` : styles.button
                }
              >
                Оновити картку
              </button>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};

export default DashboardUpdateForm;
