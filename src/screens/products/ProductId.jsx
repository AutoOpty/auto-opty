'use client';

import { GetDataById } from '@/fetch/clientFetch';
// import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import styles from './productId.module.scss';
import seoStyles from '@/app/seoStyles.module.css';
import BreadCrumbs from '@/components/share/BreadCrumbs/BreadCrumbs';
import ProductSlider from '@/components/ProductSlider/ProductSlider';
import IsLoading from '@/components/share/IsLoading/IsLoading';
import ProductsIdItem from '@/components/ProductIdItem/ProductIdItem';
import ProductDescription from '@/components/ProductDescription/ProductDescription';
import Button from '@/components/Button/Button';
import ItemSlider from '@/components/ItemSlider/ItemSlider';

const ProductId = ({ params }) => {
  const [activeTab, setActiveTab] = useState('features');
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setWindowWidth(window.innerWidth);

      const handleResize = () => {
        setWindowWidth(window.innerWidth);
      };

      window.addEventListener('resize', handleResize);

      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }
  }, []);

  useEffect(() => {
    if (windowWidth >= 1280) {
      setActiveTab('features');
    }
    return;
  }, [windowWidth]);

  const { id } = params;
  const { data, error, isLoading } = GetDataById(id);

  const dataId = data && !isLoading ? data : error;

  console.log(dataId);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };
  return (
    <section className={styles.container}>
      <h1 className={seoStyles.titleHidden}>
        Оренда квартири суми. Суми квартири. Зняти квартиру суми. Сумы.
      </h1>
      <nav className={styles.backContainer}>
        {!isLoading && (
          <figure>
            <BreadCrumbs title="Запчастини" />
          </figure>
        )}
      </nav>
      {/* <h1 className="visuallyHidden">ApartId Page</h1> */}
      {isLoading ? (
        <IsLoading />
      ) : (
        <article className={styles.productContent}>
          <h3 className={seoStyles.titleHidden}>
            Detailed information about the apartments
          </h3>
          {/* <ItemSlider dataId={dataId} /> */}
          <ProductSlider dataId={dataId} />
          <article className={styles.content}>
            {/* <h4 className={seoStyles.titleHidden}>
              Detailed information about the amenities
            </h4> */}
            {windowWidth >= 1280 ? null : (
              <figure className={styles.btnChangeContainer}>
                <button
                  onClick={() => handleTabClick('features')}
                  className={
                    activeTab === 'features'
                      ? styles.btnChangeFeatures + ' ' + styles.active
                      : styles.btnChangeFeatures
                  }
                >
                  Характеристики
                </button>
                <button
                  onClick={() => handleTabClick('description')}
                  className={
                    activeTab === 'description'
                      ? styles.btnChangeFeatures + ' ' + styles.active
                      : styles.btnChangeFeatures
                  }
                >
                  Опис товару
                </button>
              </figure>
            )}
            {activeTab === 'description' ? (
              <ProductDescription dataId={dataId} />
            ) : null}
            {activeTab === 'features' ? (
              <ProductsIdItem dataId={dataId} />
            ) : null}
            <Button className={styles.orderBtn} />
          </article>
        </article>
      )}
      {windowWidth >= 1280 ? <ProductDescription dataId={dataId} /> : null}
    </section>
  );
};

export default ProductId;
