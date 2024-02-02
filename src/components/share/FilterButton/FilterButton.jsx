"use client";

import { useEffect, useState } from "react";
import { useContext } from "react";
import { SiteContext } from "@/context/SiteContext";
import { useTranslation } from "react-i18next";
import styles from "./FilterButton.module.scss";

const FilterButton = () => {
  const { filterShown, setFilterShown } = useContext(SiteContext);
  const {t}=useTranslation();
  const [isLoad, setIsLoad] = useState(true);
  useEffect(() => {
    setIsLoad(false);
  }, []);

  return (
    <div className={styles.filterContainer}>
      {!isLoad && (
        <button
          type="button"
          className={styles.filterBtnContainer}
          onClick={() => {
            setFilterShown(!filterShown);
          }}
          // onClick={() => {
          //   setFilterShown(!filterShown);
          // }}
        >
          <svg className={styles.filterSvg}>
            <use href="symbol-defs.svg#icon-sliders" />
          </svg>
          <p className={styles.filter}>{t('Buttons.OpenFilterBtn')}</p>
        </button>
      )}
    </div>
  );
};

export default FilterButton;
