'use client';

import { CldImage } from 'next-cloudinary';
import Link from 'next/link';
import React from 'react';

import styles from './productItem.module.scss';

const ProductItem = ({
  photos,
  carBrand,
  article,
  id,
  title,
  brand,
  price,
}) => {
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
        <li className={styles.infoProduct}>Article : {article}</li>
        <li className={styles.infoProduct}>Title : {title}</li>
        <li className={styles.infoProduct}>Brand : {brand}</li>
        <li className={styles.infoProduct}>Car Brand : {carBrand}</li>
        <li className={styles.priceProduct}>{price}₴</li>
      </ul>
      <Link href={`/products/${id}`} className={styles.btnProduct}>
        Детальніше
      </Link>
    </li>
  );
};

export default ProductItem;
