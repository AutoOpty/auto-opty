import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import styles from './page.module.scss';

async function getData(carBrand) {
  const result = await fetch(
    `${process.env.NEXTAUTH_URL}/api/carBrands/${carBrand}`,
    { cache: 'no-store' }
  );

  if (!result.ok) {
    throw new Error('Failed to fetch data.');
  }

  return result.json();
}

const CarModels = async ({ params }) => {
  const data = await getData(params.carBrand);

  return (
    <div>
      <h1>{params.carBrand}</h1>

      {/* это нужно если указаны несколько моделей и с разными типами кузова... но существует ли такое в реальности ?!?!?! */}
      {/* <ul>
                {data.map((item) => item.carModel.map((model, ind) => {
                    return <li key={ind} > {model}</li>
                })
                )}
            </ul> */}
      <ul className={styles.card}>
        {data?.map((item, index) => (
          <li key={index}>
            <Link href={'/products'}>
              <div className={styles.productsCard}>
                <Image
                  className={styles.img}
                  src={item.carPhoto}
                  alt="car"
                  fill={true}
                />
                <div className={styles.cardContent}>
                  {item.carModel} - {item.carBody}
                </div>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CarModels;
