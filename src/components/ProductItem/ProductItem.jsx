'use client';

import { CldImage } from 'next-cloudinary';
// import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import styles from './productItem.module.scss';

const ProductItem = ({ photos, carBrand, article, price, id, side }) => {
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
          <figcaption className={styles.codeProduct}>
            <span className={styles.codeProductItem}>8329533</span>
          </figcaption>
        </figure>
      </Link>
      <div className={styles.productContent}>
        <p className={styles.infoProduct}>{carBrand}</p>
        <p className={styles.infoProduct}>Code:{article}</p>
        <p className={styles.infoProduct}>TYPE OF HEADLIGHTS : {side}</p>
        <p className={styles.priceProduct}>{price}$</p>
      </div>
      <Link href={`/products/${id}`} className={styles.btnProduct}>
        Детальніше
      </Link>
    </li>
  );
};

export default ProductItem;
