'use client';

import ProductItem from '@/components/ProductItem/ProductItem';
import React, { useEffect, useRef, useState } from 'react';

import styles from './products.module.scss';
import FilterButton from '@/components/share/FilterButton/FilterButton';
import BreadCrumbs from '@/components/share/BreadCrumbs/BreadCrumbs';
import { GetData } from '@/fetch/clientFetch';
import IsLoading from '@/components/share/IsLoading/IsLoading';

const Products = () => {
  const { data, error, isLoading } = GetData();
  const [loadedCount, setLoadedCount] = useState(12);
  const [showLoading, setShowLoading] = useState(false);
  const containerRef = useRef();

  const handleScroll = () => {
    const container = containerRef.current;

    if (!showLoading && data?.length && container) {
      const containerHeight = container.offsetHeight;
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const bottomOffset = containerHeight - scrollY - windowHeight;

      if (bottomOffset < 100 && loadedCount < data.length) {
        setShowLoading(true);

        setTimeout(() => {
          setLoadedCount(loadedCount + 12);
          setShowLoading(false);
        }, 500);
      }
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
    // eslint-disable-next-line
  }, [data, loadedCount]);

  return (
    <section className={styles.container}>
      <figure className={styles.toBackContainer}>
        <BreadCrumbs title="Запчастини" />
      </figure>
      <FilterButton />
      {isLoading ? (
        <IsLoading />
      ) : (
        <ul ref={containerRef} className={styles.containerProducts}>
          {data?.length > 0 &&
            data.slice(0, loadedCount).map((item) => (
              <ProductItem
                key={item._id}
                // item={item}
                title={item.title}
                article={item.article}
                carBrand={item.carBrand}
                brand={item.brand}
                price={item.price}
                side={item.side}
                photos={item.photos}
                id={item._id}
              />
            ))}
        </ul>
      )}
      {data?.length <= 0 && (
        <div className={styles.notFoundTextStyles}>
          <p>{notFoundText()} Запчастини не знайдено</p>
        </div>
      )}
      {showLoading && (
        <div className={styles.loading}>
          <IsLoading />
        </div>
      )}
    </section>
  );
};

export default Products;
