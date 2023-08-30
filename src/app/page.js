import React from 'react';
import Link from 'next/link';
import filterByProp from '@/utils/filterByProps';
import ProductSwiper from '@/sections/productSwiper/ProductSwiper';
import Contacts from '@/sections/contacts/Contacts';

import styles from './page.module.scss';

async function getData() {
  const result = await fetch(`${process.env.NEXTAUTH_URL}/api/carBrands`, {
    cache: 'no-store',
  });

  if (!result.ok) {
    throw new Error('Failed to fetch data.');
  }

  const data = await result.json();
  return data;
}

const data = await getData();

const HomePage = () => {
  const uniqueDataByCarBrands = filterByProp(data, 'carBrand');

  return (
    <div className={styles.home}>
      <ProductSwiper items={uniqueDataByCarBrands} />
      {/* <ul>
      {uniqueDataByCarBrands?.map((item, index) => (
        <li key={index}>
          <Link href={`/${item.carBrand}`}>{item.carBrand}</Link>
        </li>
      ))}
      </ul> */}
      <p className={styles.text}>
        Lorem ipsum dolor sit amet consectetur. Volutpat consectetur arcu id
        nunc. Bibendum neque interdum ultricies rutrum orci mauris scelerisque
        dui vel. Id ipsum tincidunt egestas dictum. Ipsum ut natoque rhoncus sed
        a sed parturient nibh. Ridiculus ultricies tellus in amet eget diam
        egestas. Sapien habitant ante sit volutpat amet sed. Id dolor mauris
        turpis varius placerat. Sed viverra aliquam habitant habitant eu ac
        cursus vel. Tincidunt at porttitor eget consequat mi velit leo amet ac.
      </p>
      <Contacts />
    </div>
  );
};

export default HomePage;
