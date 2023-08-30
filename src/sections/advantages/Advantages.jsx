import React from 'react';
import { Inter } from 'next/font/google';
import styles from './advantages.module.scss';

const inter = Inter({ subsets: ['latin'] });

const data = [
  {
    id: 1,
    svg: 'symbol-defs.svg#icon-support',
    title: 'Professional assistance',
  },
  {
    id: 2,
    svg: 'symbol-defs.svg#icon-bestPrice',
    title: 'Best price',
  },
  {
    id: 3,
    svg: 'symbol-defs.svg#icon-medal',
    title: 'Original details',
  },
];

const Advantages = () => {
  return (
    <section className={styles.advantages}>
      {data.map(({ id, svg, title }) => (
        <div key={id} className={styles.advantagesContent}>
          <svg className={styles.icon}>
            <use href={svg} />
          </svg>
          <p className={`${styles.title} ${inter.className}`}>{title}</p>
        </div>
      ))}
    </section>
  );
};

export default Advantages;
