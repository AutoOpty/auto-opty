"use client";

import React, { useCallback, useEffect, useState } from "react";
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
import Loading from "../Loading/Loading";

const HomeSlider = () => {
  const { data, error, isLoading } = GetData();
  const isClient = typeof window !== "undefined";
  const [slidesPerView, setSlidesPerView] = useState(5); // Default value for slidesPerView

  // Function to update slidesPerView based on viewport width
  const updateSlidesPerView = () => {
    if (window.innerWidth < 600) {
      setSlidesPerView(1); // Adjust this value for smaller screens
    } else if (window.innerWidth < 900) {
      setSlidesPerView(2); // Adjust this value for medium-sized screens
    } else if (window.innerWidth < 1200) {
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
        <h2>Ми рекомендуємо</h2>

        {isClient && !isLoading ? (
          <Swiper
            slidesPerView={slidesPerView}
            loop={true}
            speed={1200}
            autoplay={{
              delay: 2400,
              pauseOnMouseEnter: true,
            }}
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
            {data?.map((el) => (
              <SwiperSlide key={el._id}>
                <Link href={`products/${el._id}`}>
                  <CldImage
                    src={el.photos[0]}
                    fill
                    sizes="50vw"
                    alt={el.title}
                    loading="lazy"
                  />
                  <p className="slideDescr">{el.article}</p>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        ) : (
          <Loading />
        )}
      </div>
    </section>
  );
};

export default HomeSlider;
