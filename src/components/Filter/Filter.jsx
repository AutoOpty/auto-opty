"use client";
// import React, { useState, useContext, useEffect } from "react";
// import { useTranslation } from "react-i18next";
// import { SiteContext } from "@/context/SiteContext";
import styles from "./Filter.module.scss";
import { filterData } from "@/data";
// import { beds } from "@/data";
// import { amenities, currentLanguages } from "@/data";
// import FilterItem from "./FilterItem/FilterItem";
// import FilterItemBeds from "./FilterItem/FilterItemBeds";
// import Image from "next/image";
// import { usePathname } from "next/navigation";

const Filter = ({ data }) => {
  //   const dataId = data && !isLoading ? data : error;
  console.log(data);

  //   console.log(dataId);
  return (
    <ul className={styles.filter}>
      <li className={styles.filterItem}>
        <p className={styles.filterTitle}>Car Brand</p>
        <select className={styles.filterSelect} name="carBrand" id="">
          <option value="1">-</option>
          <option value="6">1</option>
          <option value="3">2</option>
          <option value="4">3</option>
          <option value="5">4</option>
          <option value="7">5</option>
          <option value="2">6</option>
        </select>
      </li>

      <li className={styles.filterItem}>
        <p className={styles.filterTitle}>Car Models</p>
        <select className={styles.filterSelect} name="carModels" id=""></select>
      </li>

      <li className={styles.filterItem}>
        <p className={styles.filterTitle}>Car Bodies</p>
        <select className={styles.filterSelect} name="carBodies" id=""></select>
      </li>

      <li className={styles.filterItem}>
        <p className={styles.filterTitle}>Year</p>
        <select className={styles.filterSelect} name="carYear" id=""></select>
      </li>

      <div className={styles.priceContainer}>
        <p className={styles.filterTitle}>Price</p>
        <select
          className={styles.filterSelect}
          name="carPriceFrom"
          id=""
        ></select>
        <select
          className={styles.filterSelect}
          name="carPriceTo"
          id=""
        ></select>
      </div>
      <li className={styles.filterItem}>
        <p className={styles.filterTitle}>Side</p>
        <select className={styles.filterSelect} name="carSide" id=""></select>
      </li>
    </ul>
  );
};

export default Filter;
