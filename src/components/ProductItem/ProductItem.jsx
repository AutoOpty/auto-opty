'use client';

import Image from 'next/image';
// import { CldImage } from 'next-cloudinary';
import Link from 'next/link';
import React from 'react';

import styles from './productItem.module.scss';

const ProductItem = ({ photos, title, price, id, code, type }) => {
  return (
    <li className={styles.productContainer}>
      <Link href={`/products/${id}`}>
        <figure className={styles.imgContainer}>
          <Image
            src={photos}
            alt="apartment"
            fill
            className={styles.img}
            priority
            sizes="(max-width: 768px) 324px, (max-width: 1440px) 300px"
          />
          <figcaption className={styles.codeProduct}>
            <span className={styles.codeProductItem}>8329533</span>
          </figcaption>
        </figure>
      </Link>
      <div className={styles.productContent}>
        <p className={styles.infoProduct}>{title}</p>
        <p className={styles.infoProduct}>Code:{code}</p>
        <p className={styles.infoProduct}>TYPE OF HEADLIGHTS : {type}</p>
        <p className={styles.priceProduct}>{price}$</p>
      </div>
      <Link href={`/products/${id}`} className={styles.btnProduct}>
        Детальніше
      </Link>
    </li>
  );
};

export default ProductItem;
