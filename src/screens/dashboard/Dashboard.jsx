"use client";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { GetData } from "@/fetch/clientFetch";
import { toast } from "react-toastify";
import styles from "./dashboard.module.scss";
import { CldImage } from "next-cloudinary";
import { handleDeleteImgFromCloudinary } from "@/helpers/handleDeleteImgFromCloudinary";
import DashboardCreateForm from "@/components/DashboardCreateForm/DashboardCreateForm";

const Dashboard = () => {
  const session = useSession();

  const router = useRouter();
  const { data, mutate, isLoading } = GetData();

  const handleDeleteProductFromDB = async (id, article) => {
    try {
      await fetch(`/api/products/${id}`, { method: "DELETE" });
      // автоматически обновляет страницу при изменении кол-ва карточек
      mutate();
    } catch (error) {
      console.log(error);
    }
    toast.success(`Картка з артикулем ${article} видалена`, { theme: "dark" });
  };

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
          <div className={styles.contentWrapper}>
            <div className={styles.products}>
              {data?.map((product) => (
                <div key={product._id} className={styles.product}>
                  <h2>{product.article}</h2>
                  <p className={styles.textContent}>Назва: {product.title}</p>
                  <p className={styles.textContent}>
                    Назва англійською: {product.titleEn}
                  </p>
                  <p className={styles.textContent}>Бренд: {product.brand}</p>
                  <p className={styles.textContent}>Фото:</p>
                  <ul className={styles.imgsWrapper}>
                    {product.photos.map((item, index) => (
                      <li className={styles.imgCont} key={index}>
                        <CldImage
                          width="200"
                          height="100"
                          crop="fill"
                          src={item}
                          alt="Automotive optic"
                        />
                      </li>
                    ))}
                  </ul>
                  <p className={styles.textContent}>
                    Опис: {product.description}
                  </p>
                  <p className={styles.textContent}>
                    Опис англійською: {product.descriptionEn}
                  </p>
                  <p className={styles.textContent}>Сторона: {product.side}</p>
                  <p className={styles.textContent}>Ціна: {product.price}</p>
                  <p className={styles.textContent}>
                    Марка авто: {product.carBrand}
                  </p>
                  <p className={styles.textContent}>Моделі авто:</p>
                  <ul className={styles.models}>
                    {product.carModels.map((item, index) => (
                      <li key={index}>- {item}</li>
                    ))}
                  </ul>
                  <p className={styles.textContent}>Кузови авто:</p>
                  <ul className={styles.bodies}>
                    {product.carBodies.map((item, index) => (
                      <li key={index}>- {item}</li>
                    ))}
                  </ul>
                  <p className={styles.textContent}>
                    Початок використання: {product.installedFrom}
                  </p>
                  <p className={styles.textContent}>
                    Кінець використання: {product.installedUntil}
                  </p>

                  <div className={styles.btnsWrapper}>
                    <Link
                      className={styles.editLink}
                      href={`/dashboard/${product._id}`}
                    >
                      <svg className={styles.editIcon}>
                        <use href="/sprite.svg#icon-edit" />
                      </svg>
                    </Link>

                    <svg
                      className={styles.deleteIcon}
                      onClick={() => {
                        product.photos.map((item) =>
                          handleDeleteImgFromCloudinary(item)
                        );

                        handleDeleteProductFromDB(product._id, product.article);
                      }}
                    >
                      <use href="/sprite.svg#icon-delete" />
                    </svg>
                  </div>
                </div>
              ))}
            </div>
            <DashboardCreateForm />
          </div>
        )}
      </div>
    );
  }
};

export default Dashboard;
