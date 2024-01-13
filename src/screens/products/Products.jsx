import ProductItem from '@/components/ProductItem/ProductItem';
import React from 'react';

import styles from './products.module.scss';
import autoProducts from './auto-products.png';

const data = [
  {
    id: 1,
    title: 'BMW 5 E60 E61',
    code: '9566273753',
    type: 'Led',
    price: '29',
    photos: autoProducts,
  },
  {
    id: 2,
    title: 'BMW 5 E60 E61',
    code: '9566273753',
    type: 'Led',
    price: '29',
    photos: autoProducts,
  },
  {
    id: 3,
    title: 'BMW 5 E60 E61',
    code: '9566273753',
    type: 'Led',
    price: '29',
    photos: autoProducts,
  },
  {
    id: 4,
    title: 'BMW 5 E60 E61',
    code: '9566273753',
    type: 'Led',
    price: '29',
    photos: autoProducts,
  },
  {
    id: 5,
    title: 'BMW 5 E60 E61',
    code: '9566273753',
    type: 'Led',
    price: '29',
    photos: autoProducts,
  },
  {
    id: 6,
    title: 'BMW 5 E60 E61',
    code: '9566273753',
    type: 'Led',
    price: '29',
    photos: autoProducts,
  },
];

const Products = () => {
  return (
    // <section>
    <ul className={styles.containerProducts}>
      {data.map((item) => (
        <ProductItem
          key={item._id}
          title={item.title}
          code={item.code}
          price={item.price}
          type={item.type}
          photos={item.photos}
          id={item._id}
        />
      ))}
    </ul>
    // </section>
  );
};

export default Products;
