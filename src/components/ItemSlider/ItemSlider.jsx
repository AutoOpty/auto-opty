import React, { useState } from 'react';
import styles from './ItemSlider.module.scss';
import { v4 } from 'uuid';
import { CldImage } from 'next-cloudinary';
import { Swiper, SwiperSlide } from 'swiper/react';
// import {
//   Navigation,
//   Pagination,
//   Mousewheel,
//   Keyboard,
//   FreeMode,
// } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './ItemSliderTop.css';
import './ItemSliderBottom.css';
import { useEffect } from 'react';

const ItemSlider = ({ dataId }) => {
  const [item, setItem] = useState(null);
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  const images = dataId?.photos;

  const imgPtiority = dataId?.photos[0] ? true : false;
  const imgLoading = dataId?.photos[0] ? 'eager' : 'lazy';

  useEffect(() => {
    setItem(
      images.map((item) => (
        <SwiperSlide key={v4()}>
          <CldImage
            src={item}
            alt="Flat image"
            fill={true}
            loading={imgLoading}
            sizes="50vw"
            priority={imgPtiority}
          />
        </SwiperSlide>
      ))
    );
  }, [images, imgLoading, imgPtiority]);

  return (
    <article className={styles.swiperContainer}>
      {item && (
        <Swiper
          loop={true}
          spaceBetween={10}
          navigation={true}
          pagination={{
            clickable: true,
            dynamicBullets: true,
          }}
          keyboard={{
            enabled: true,
          }}
          thumbs={{ swiper: thumbsSwiper }}
          // modules={[FreeMode, Navigation, Pagination, Thumbs, Keyboard]}
          className="ItemSliderTop"
        >
          {item}
        </Swiper>
      )}

      {item && (
        <Swiper
          onSwiper={setThumbsSwiper}
          spaceBetween={16}
          slidesPerView={3}
          mousewheel={true}
          loop={true}
          freeMode={true}
          watchSlidesProgress={true}
          keyboard={{
            enabled: true,
          }}
          // modules={[FreeMode, Navigation, Thumbs, Keyboard, Mousewheel]}
          className="ItemSliderBottom"
        >
          {item}
        </Swiper>
      )}
    </article>
  );
};

export default ItemSlider;
