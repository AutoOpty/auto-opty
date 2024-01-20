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
      <div className={styles.productContent}>
        <p className={styles.infoProduct}>Article : {article}</p>
        <p className={styles.infoProduct}>Title : {title}</p>
        <p className={styles.infoProduct}>Brand : {brand}</p>
        <p className={styles.infoProduct}>Car Brand : {carBrand}</p>
        <p className={styles.priceProduct}>{price}$</p>
      </div>
      <Link href={`/products/${id}`} className={styles.btnProduct}>
        Детальніше
      </Link>
    </li>
  );
};

export default ProductItem;
