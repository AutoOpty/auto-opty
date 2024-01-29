'use client';

import { CldImage } from 'next-cloudinary';
import Link from 'next/link';
import React from 'react';
import styles from './productItem.module.scss';
import { useTranslation } from 'react-i18next';

const ProductItem = ({
  photos,
  carBrand,
  article,
  id,
  title,
  brand,
  price,
}) => {
  const {t}=useTranslation()
  return (
    <li className={styles.productContainer}>
      <Link href={`/products/${id}`}>
        <figure className={styles.imgContainer}>
          <CldImage
            src={photos[0]}
            alt="apartment"
            fill
            className={styles.img}
            priority
            sizes="(max-width: 768px) 352px, (max-width: 1440px) 300px"
          />
          {/* <figcaption className={styles.codeProduct}>
            <span className={styles.codeProductItem}>8329533</span>
          </figcaption> */}
        </figure>
      </Link>
      <ul className={styles.productContent}>
        <li className={styles.infoProduct}>{t('PartItems.Article')} : {article}</li>
        <li className={styles.infoProduct}>{t('PartItems.Title')} : {title}</li>
        <li className={styles.infoProduct}>{t('PartItems.Brand')} : {brand}</li>
        <li className={styles.infoProduct}>{t('PartItems.CarBrand')} : {carBrand}</li>
        <li className={styles.priceProduct}>{price}₴</li>
      </ul>
      <Link href={`/products/${id}`} className={styles.btnProduct}>
        {t('Buttons.CardDetailsBtn')}
      </Link>
    </li>
  );
};

export default ProductItem;
