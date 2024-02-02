"use client";

import BreadCrumbs from "@/components/share/BreadCrumbs/BreadCrumbs";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import styles from "./garantee.module.scss";
import seoStyles from "@/app/seoStyles.module.css";
import HomeSlider from "@/components/HomeSlider/HomeSlider";
import {listGuaranteeRules, listDocumentsForGuarantee, currentLanguages} from "@/data";

const Guarantee = () => {
  const {t}=useTranslation()
  const {i18n}=useTranslation()
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
          <BreadCrumbs title={t('Navigation.Guarantee')} />
        </figure>
        <div className={styles.garanteeContainer}>
          <article>
            {!isLoading && (
              <>
                <h2 className={styles.title}>{t('GuaranteePage.MainTitle')}</h2>
                <ul className={styles.rulesList}>
                  <li>
                    <h3 className={styles.decimalListTitle}>
                      {t('GuaranteePage.TitleSection1')}
                    </h3>
                    <ol className={styles.decimalList}>
                      {listGuaranteeRules.map(({id,rule,ruleEN})=>{
                       return (<li key={id}>
                        {i18n.language === currentLanguages.EN ? ruleEN : rule}
                       </li>)
                      })}
                    </ol>
                  </li>
                  <li>
                    <h3 className={styles.decimalListTitle}>
                      {t('GuaranteePage.TitleSection2')}
                    </h3>
                    <ol className={styles.decimalList}>
                      {listDocumentsForGuarantee.map(({id,item,itemEN})=>{
                        return (<li key={id}>
                          {i18n.language === currentLanguages.EN ? itemEN : item}
                        </li>)
                      })}
                    </ol>
                  </li>
                </ul>
              </>
            )}
          </article>
        </div>
        <div className={styles.swiperWrapper}>
          <HomeSlider />
        </div>
      </div>
    </section>
  );
};

export default Guarantee;
