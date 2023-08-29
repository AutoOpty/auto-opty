'use client';

import React, { useState } from 'react';
import Link from 'next/link';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './styles.css';

import { EffectCoverflow, Navigation, Pagination } from 'swiper/modules';

import styles from './productSwiper.module.scss';

const ProductSwiper = ({ items }) => {
  // const [thumbsSwiper, setThumbsSwiper] = useState(null);

  const item = items?.map((item, index) => (
    <SwiperSlide key={index}>
      <Link href={`/${item.carBrand}`} className={styles.swiperProduct}>
        <svg className={styles.icon}>
          <use href={`symbol-defs.svg#${[item.carBrand]}`} />
        </svg>
      </Link>
    </SwiperSlide>
  ));
  return (
    <section className={styles.swiper}>
      {/* <div className={styles.swiperContainer}> */}
      <Swiper
        slidesPerView={'auto'}
        centeredSlides={true}
        spaceBetween={30}
        effect={'coverflow'}
        grabCursor={true}
        navigation={true}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        speed={1000}
        modules={[EffectCoverflow, Navigation]}
        className="mySwiper"
      >
        {item}
      </Swiper>
      {/* <Swiper
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          // loop={true}
          freeMode={true}
          slidesPerView={'auto'}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2.5,
          }}
          navigation={true}
          pagination={{
            clickable: true,
            dynamicBullets: true,
          }}
          speed={1000}
          modules={[EffectCoverflow, Pagination, Navigation]}
        >
          {item}
        </Swiper> */}
      {/* </div> */}
    </section>
  );
};

export default ProductSwiper;
