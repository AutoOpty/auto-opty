import Image from 'next/image';
import React from 'react';
import styles from './page.module.scss';

const data = [
  {
    id: 1,
    img: '/car.png',
    title: 'BMW 5 E60 E61',
    code: '9566273753',
    type: 'Led',
    price: '$ 3999',
  },
  {
    id: 2,
    img: '/car.png',
    title: 'BMW 5 E60 E61',
    code: '9566273753',
    type: 'Led',
    price: '$ 3999',
  },
];

const ProductsPage = () => {
  return (
    <section className={styles.card}>
      <ul className={styles.cardList}>
        {data.map((item) => (
          <li key={item.id} className={styles.cardItem}>
            <div className={styles.imgCard}>
              <Image
                className={styles.img}
                src={item.img}
                alt="car model"
                fill={true}
              />
            </div>
            <div className={styles.cardContent}>
              <h2 className={styles.title}>{item.title}</h2>
              <p className={styles.code}>Code: {item.code}</p>
              <p className={styles.type}>TYPE OF HEADLIGHTS : {item.type}</p>
              <span className={styles.price}>{item.price}</span>
              <button type="button" className={styles.btnOrder}>
                Order
              </button>
              <div className={styles.cardParams}>
                <button
                  className={styles.params + ' ' + styles.paramsBtn}
                  type="button"
                >
                  Order
                </button>
                <p className={styles.params}>Parameters</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default ProductsPage;
