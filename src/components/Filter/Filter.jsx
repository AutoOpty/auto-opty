"use client";
import { useContext, useEffect, useState } from "react";
// import React, { useState, useContext, useEffect } from "react";
import { useTranslation } from "react-i18next";
// import { SiteContext } from "@/context/SiteContext";
import styles from "./Filter.module.scss";
import { filterData } from "@/data";
import { SiteContext } from "@/context/SiteContext";
// import { beds } from "@/data";
// import { amenities, currentLanguages } from "@/data";
// import FilterItem from "./FilterItem/FilterItem";
// import FilterItemBeds from "./FilterItem/FilterItemBeds";
// import Image from "next/image";
// import { usePathname } from "next/navigation";

const Filter = ({
  data,
  filteredData,
  setCarBrand,
  setCarModel,
  setCarBody,
  setCarYear,
  setCarPriceFrom,
  setCarPriceTo,
  setCarSide,
}) => {
  const [carPriceFromTemp, setCarPriceFromTemp] = useState("");
  const [carPriceToTemp, setCarPriceToTemp] = useState("");
  const { filterShown, setFilterShown } = useContext(SiteContext);

  const {t}=useTranslation()

  useEffect
  //
  console.log(data);
  const carBrands = () => {
    const arr = [];
    data?.map((item) => {
      if (!arr.includes(item.carBrand)) {
        arr?.push(item.carBrand);
      }
    });
    return arr.sort();
  };

  const carModels = () => {
    const arr = [];
    filteredData?.map((item) => {
      const models = [...item.carModels]; // усі моделі в окремий массив
      models.map((model) => {
        if (!arr.includes(model)) {
          arr.push(model); //якщо така модель не присутня в масиві моделей, пушимо
        }
      });
    });
    return arr.sort();
  };

  const carBodies = () => {
    const arr = [];
    filteredData?.map((item) => {
      const bodies = [...item.carBodies]; // теж саме, як в моделях
      bodies.map((body) => {
        if (!arr.includes(body)) {
          arr.push(body);
        }
      });
    });
    return arr.sort();
  };

  const carYears = () => {
    const arr = [];
    filteredData?.map((item) => {
      if (!arr.includes(item.installedFrom)) {
        arr.push(item.installedFrom);
      }

      if (!arr.includes(item.installedUntil)) {
        arr.push(item.installedUntil);
      }
    });

    return arr.sort();
  };

  const handleCarBrandChange = (event) => {
    if (event.target.value == "All Brands") {
      setCarBrand(null);
      return;
    }

    setCarBrand(event.target.value);
  };

  const handleCarModelChange = (event) => {
    if (event.target.value == "All Models") {
      setCarModel(null);
      return;
    }

    setCarModel(event.target.value);
  };
  const handleCarBodyChange = (event) => {
    if (event.target.value == "All Bodies") {
      setCarBody(null);
      return;
    }

    setCarBody(event.target.value);
  };
  const handleCarYearChange = (event) => {
    if (event.target.value == "All") {
      setCarYear(null);
      return;
    }

    setCarYear(event.target.value);
  };

  const handleCarPriceFromChange = (event) => {
    if (event.target.value == "") {
      setCarPriceFrom("");
      setCarPriceFromTemp("");
      return;
    }
    setCarPriceFromTemp(event.target.value);

    const timeout = setTimeout(() => {
      setCarPriceFrom(event.target.value);
    }, 1000);

    return () => {
      clearTimeout(timeout);
    };
  };

  const handleCarPriceToChange = (event) => {
    if (event.target.value == "") {
      setCarPriceTo("");
      setCarPriceToTemp("");
      return;
    }
    setCarPriceToTemp(event.target.value);

    const timeout = setTimeout(() => {
      setCarPriceTo(event.target.value);
    }, 1000);

    return () => {
      clearTimeout(timeout);
    };
  };

  const handleCarSideChange = (event) => {
    if (event.target.value == "All") {
      setCarSide(null);
      return;
    }
    if (event.target.value == "Left") {
      setCarSide("L");
      return;
    }
    if (event.target.value == "Right") {
      setCarSide("R");
      return;
    }
    if (event.target.value == "Left+Right") {
      setCarSide("L+R");
      return;
    }
  };

  const handleFilterReset = () => {
    const carBrandSelect = document.getElementsByName("carBrand");
    const carModelsSelect = document.getElementsByName("carModels");
    const carBodiesSelect = document.getElementsByName("carBodies");
    const carYearSelect = document.getElementsByName("carYear");
    const carSideSelect = document.getElementsByName("carSide");
    carBrandSelect[0].options.selectedIndex = 0;
    carModelsSelect[0].options.selectedIndex = 0;
    carBodiesSelect[0].options.selectedIndex = 0;
    carYearSelect[0].options.selectedIndex = 0;
    carSideSelect[0].options.selectedIndex = 0;

    setCarBrand(null);
    setCarModel(null);
    setCarBody(null);
    setCarYear(null);
    setCarPriceFrom("");
    setCarPriceFromTemp("");
    setCarPriceTo("");
    setCarPriceToTemp("");
    setCarSide(null);
  };

  const isFilterShown = filterShown ? styles.filter : styles.filter_hidden;

  return (
    <ul className={isFilterShown}>
      <li className={styles.filterItem}>
        <p className={styles.filterTitle}>{t('Filter.CarBrand')}</p>
        <select
          className={styles.filterSelect}
          name="carBrand"
          id=""
          onChange={handleCarBrandChange}
          //   defaultValue="All Brands"
        >
          <option value="All Brands">{t('Filter.AllBrandsPlaceholder')}</option>
          {carBrands()?.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>
      </li>

      <li className={styles.filterItem}>
        <p className={styles.filterTitle}>{t('Filter.CarModels')}</p>
        <select
          className={styles.filterSelect}
          name="carModels"
          id=""
          onChange={handleCarModelChange}
        >
          <option value="All Models">{t('Filter.AllModelsPlaceholder')}</option>
          {carModels()?.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>
      </li>

      <li className={styles.filterItem}>
        <p className={styles.filterTitle}>{t('Filter.CarBodies')}</p>
        <select
          className={styles.filterSelect}
          name="carBodies"
          id=""
          onChange={handleCarBodyChange}
        >
          <option value="All Bodies">{t('Filter.AllBodiesPlaceholder')}</option>
          {carBodies()?.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>
      </li>

      <li className={styles.filterItem}>
        <p className={styles.filterTitle}>{t('Filter.Year')}</p>
        <select
          className={styles.filterSelect}
          name="carYear"
          id=""
          onChange={handleCarYearChange}
        >
          <option value="All Years">{t('Filter.PlaceholderALL')}</option>
          {carYears()?.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>
      </li>

      <li className={styles.priceContainer}>
        <p className={styles.filterTitle}>{t('Filter.Price')}</p>
        <input
          type="text"
          placeholder={t('Filter.PriceFromPlaceholder')}
          className={styles.filterInput}
          value={carPriceFromTemp}
          onChange={handleCarPriceFromChange}
        />
        <input
          type="text"
          placeholder={t('Filter.PriceToPlaceholder')}
          className={styles.filterInput}
          value={carPriceToTemp}
          onChange={handleCarPriceToChange}
        />
        {/* <select className={styles.filterSelect} name="carPriceFrom" id="">
          {" "}
          <option value="From" selected>
            From
          </option>
          {carPrice()?.map((item) => (
            <option key={item} value={item}>
              {item}$
            </option>
          ))}
        </select>
        <select className={styles.filterSelect} name="carPriceTo" id="">
          {" "}
          <option value="To" selected>
            To
          </option>
          {carPrice()?.map((item) => (
            <option key={item} value={item}>
              {item}$
            </option>
          ))}
        </select> */}
      </li>
      <li className={styles.filterItem}>
        <p className={styles.filterTitle}>{t('Filter.Side')}</p>
        <select
          className={styles.filterSelect}
          name="carSide"
          id=""
          onChange={handleCarSideChange}
        >
          <option value="All">{t('Filter.PlaceholderALL')}</option>
          <option value="Left">{t('Filter.PlaceholderLeft')}</option>
          <option value="Right">{t('Filter.PlaceholderRight')}</option>
          <option value="Left+Right">{t('Filter.PlaceholderLeftRight')}</option>
        </select>
      </li>
      <div>
        <button className={styles.filterButton} onClick={handleFilterReset}>
          {t('Buttons.FilterClear')}
        </button>
        <button
          className={styles.filterButton}
          onClick={() => setFilterShown(!filterShown)}
        >
          {t('Buttons.CloseFilterBtn')}
        </button>
      </div>
    </ul>
  );
};

export default Filter;
