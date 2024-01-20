'use client';

import { GetDataById } from '@/fetch/clientFetch';
// import Link from 'next/link';
import React from 'react';
import styles from './productId.module.scss';
import seoStyles from '@/app/seoStyles.module.css';
import BreadCrumbs from '@/components/share/BreadCrumbs/BreadCrumbs';
import ProductSlider from '@/components/ProductSlider/ProductSlider';
import IsLoading from '@/components/share/IsLoading/IsLoading';
import ProductsIdItem from '@/components/ProductIdItem/ProductIdItem';

const ProductId = ({ params }) => {
  const { id } = params;
  const { data, error, isLoading } = GetDataById(id);

  const dataId = data && !isLoading ? data : error;

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
      {/* <ModalR isOpen={isModalOpen} closeModal={closeModal}>
        <OrderForm isOpen={isModalOpen} closeModal={closeModal} />
      </ModalR> */}
      {/* <h1 className="visuallyHidden">ApartId Page</h1> */}
      {isLoading ? (
        <IsLoading />
      ) : (
        <article className={styles.productContent}>
          <h3 className={seoStyles.titleHidden}>
            Detailed information about the apartments
          </h3>
          <ProductSlider dataId={dataId} />
          <article className={styles.content}>
            {/* <h4 className={seoStyles.titleHidden}>
              Detailed information about the amenities
            </h4> */}
            {/* <hr style={{ width: '100%' }} /> */}
            <ProductsIdItem dataId={dataId} />
            <button type="button" className={styles.orderBtn}>
              Забронювати
            </button>
            {/* <OrderBtn className={styles.orderBtn} openModal={openModal} /> */}
          </article>
        </article>
      )}

      <article className={styles.textGrid}>
        <h6 className={styles.textWelcome}>
          {/* {!isLoading && t('ApartIdItem.TextWelcome')} */}
        </h6>
        {/* <ul className={styles.textInfo}>
          {!isLoading &&
            textInfoAppartId.map((el) => {
              return (
                <li key={el.id}>
                  {i18n.language === currentLanguages.EN ? el.textEN : el.text}
                </li>
              );
            })}
        </ul> */}
      </article>
    </section>
  );
};

export default ProductId;
