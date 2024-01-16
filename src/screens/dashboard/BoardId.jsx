"use client";
import React from "react";
import styles from "./boardId.module.scss";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { CldImage } from "next-cloudinary";
import { handleDeleteImgFromMongoDB } from "@/helpers/handleDeleteImgFromMongoDB";
import { handleDeleteImgFromCloudinary } from "@/helpers/handleDeleteImgFromCloudinary";
import { GetDataById } from "@/fetch/clientFetch";

const BoardId = ({ params }) => {
  const { id } = params;

  const session = useSession();

  const { data, mutate, error, isLoading } = GetDataById(id);

  const router = useRouter();

  if (session.status === "loading") {
    return <p>Loading...</p>;
  }

  if (session.status === "unauthenticated") {
    router?.push("/dashboard/login");
  }

  if (
    session.status === "authenticated" &&
    session.data.user.email !== process.env.NEXT_PUBLIC_ADMIN
  ) {
    router.push("/");
  }

  if (
    session.status === "authenticated" &&
    session.data.user.email === process.env.NEXT_PUBLIC_ADMIN
  ) {
    return (
      <div className={styles.container}>
        <p className={styles.displaySizeMessage}>
          Для користування цим функціоналом розмір Вашого екрану повинен бути не
          менше 768 пікселів.
        </p>
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          <div key={data._id} className={styles.product}>
            <h2>Артикул : {data.article}</h2>
            <p className={styles.textContent}>Назва: {data.title}</p>
            <p className={styles.textContent}>Бренд: {data.brand}</p>
            <p className={styles.textContent}>Фото:</p>

            <ul className={styles.imgsWrapper}>
              {data.photos.map((item, index) => (
                <li className={styles.imgsItem} key={index}>
                  <div className={styles.imgCont}>
                    <CldImage
                      width="200"
                      height="100"
                      crop="fill"
                      src={item}
                      alt="Automotive optics"
                    />
                  </div>
                  <svg
                    className={styles.deleteIcon}
                    onClick={async () => {
                      handleDeleteImgFromMongoDB(data, data._id, item, mutate);

                      handleDeleteImgFromCloudinary(item);
                    }}
                  >
                    <use href="/sprite.svg#icon-delete" />
                  </svg>
                </li>
              ))}
            </ul>
            <p className={styles.textContent}>Опис: {data.description}</p>
            <p className={styles.textContent}>Сторона: {data.side}</p>
            <p className={styles.textContent}>Ціна: {data.price}</p>
            <p className={styles.textContent}>Марка авто: {data.carBrand}</p>
            <ul className={styles.models}>
              Моделі авто:
              {data.carModels.map((item, index) => (
                <li key={index}>{-item}</li>
              ))}
            </ul>
            <ul className={styles.bodies}>
              Кузови авто:
              {data.carBodies.map((item, index) => (
                <li key={index}>-{item}</li>
              ))}
            </ul>
            <p className={styles.textContent}>
              Початок використання: {data.installedFrom}
            </p>
            <p className={styles.textContent}>
              Кінець використання: {data.installedUntil}
            </p>
          </div>
        )}

        {/* {isLoading ? (
          <p>Loading</p>
        ) : (
          <UpdatingFormik id={id} apart={data} mutate={mutate} />
        )} */}
      </div>
    );
  }
};

export default BoardId;
