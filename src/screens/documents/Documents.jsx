"use client";

import BreadCrumbs from "@/components/share/BreadCrumbs/BreadCrumbs";
import React, { useEffect, useState } from "react";
import styles from "./documents.module.scss";
import seoStyles from "@/app/seoStyles.module.css";

const Documents = () => {
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
          <BreadCrumbs title="Документи" />
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
