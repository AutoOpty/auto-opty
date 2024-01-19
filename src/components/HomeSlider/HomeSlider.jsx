"use client";

import React, { useEffect, useState } from "react";
import { GetData } from "@/fetch/clientFetch";
import { CldImage } from "next-cloudinary";
import Link from "next/link";
import styles from "./HomeSlider.module.scss";

import { Swiper, SwiperSlide } from "swiper/react";

// import required modules
import { Pagination, Navigation, Keyboard, Autoplay } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./HomeSlider.css";

const HomeSlider = () => {
  const { data, error, isLoading } = GetData();
  const [slidesPerView, setSlidesPerView] = useState(5); // Default value for slidesPerView

  // Function to update slidesPerView based on viewport width
  const updateSlidesPerView = () => {
    if (window.innerWidth < 500) {
      setSlidesPerView(1); // Adjust this value for smaller screens
    } else if (window.innerWidth < 700) {
      setSlidesPerView(2); // Adjust this value for medium-sized screens
    } else if (window.innerWidth < 900) {
      setSlidesPerView(3);
    } else if (window.innerWidth < 1400) {
      setSlidesPerView(4);
    } else if (window.innerWidth < 1700) {
      setSlidesPerView(4);
    } else {
      setSlidesPerView(5); // Default value for larger screens
    }
  };

  // Initial setup
  useEffect(() => {
    updateSlidesPerView();

    // Add an event listener to update slidesPerView when the window is resized
    window.addEventListener("resize", updateSlidesPerView);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", updateSlidesPerView);
    };
  }, []);

  return (
    <section className={styles.hero}>
      <div className={`container ${styles.container}`}>
        <h2>Lorem ipsum</h2>

        {/* <ul>{product}</ul> */}
        <Swiper
          slidesPerView={slidesPerView}
          spaceBetween={30}
          loop={true}
          speed={1200}
          //   autoplay={{
          //     delay: 2400,
          //     pauseOnMouseEnter: true,
          //   }}
          effect="slide"
          pagination={{
            dynamicBullets: true,
          }}
          navigation={true}
          keyboard={{
            enabled: true,
          }}
          modules={[Pagination, Navigation, Keyboard, Autoplay]}
          className="HomeSliderSwiper"
        >
          {/* {product} */}
          {data?.map((el) => {
            console.log(el.photos[0]);
            return (
              <SwiperSlide key={el._id}>
                <Link href={`products/${el._id}`}>
                  <CldImage
                    src={el.photos[0]}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    alt={el.title}
                    // alt={
                    //   i18n.language === currentLanguages.EN
                    //     ? el.addressEn
                    //     : el.address
                    // }
                    loading="lazy"
                  />
                </Link>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
};

export default HomeSlider;
