"use client";

import BreadCrumbs from "@/components/share/BreadCrumbs/BreadCrumbs";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import styles from "./documents.module.scss";
import seoStyles from "@/app/seoStyles.module.css";

const Documents = () => {

  const {t}=useTranslation();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(false);
  }, []);

  return (
    <section className={styles.container}>
      <div className="container">
        <h1 className={seoStyles.titleHidden}>
          Оренда квартири Суми. Сумы квартиры. Квартири подобово.
        </h1>
        <figure className={styles.toBackContainer}>
          <BreadCrumbs title={t('Navigation.Documents')} />
        </figure>
        <div className={styles.garanteeContainer}>
          <article>
            {!isLoading && (
              <>
                <h2 className={styles.title}>Сторінка в процесі розробки...</h2>
              </>
            )}
          </article>
        </div>
      </div>
    </section>
  );
};

export default Documents;
