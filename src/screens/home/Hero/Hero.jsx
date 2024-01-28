// "use client"

// import CallBtn from "@/components/CallBtn/CallBtn";
// import React, { useState, useEffect } from "react";
// import styles from "./Hero.module.scss";
// import { useTranslation } from "react-i18next";


// const Hero = () => {
//   const { t } = useTranslation();
//   const [isLoad, setIsLoad] = useState(true);

//   useEffect(() => {
//     setIsLoad(false);
//   }, []);


//   return (
//     <section className={styles.hero}>
//       {!isLoad && <h1>Auto Opti</h1>}
//       {!isLoad && <p>{t('MainPage.heroTitle')}</p>}
//       {!isLoad && <CallBtn />}
//     </section>
//   );
// };

// export default Hero;




"use client"

import CallBtn from "@/components/CallBtn/CallBtn";
import React from "react";
import styles from "./Hero.module.scss";
import { useTranslation } from "react-i18next";
import { GetData } from "@/fetch/clientFetch";


const Hero = () => {
  const { t } = useTranslation();
  const { isLoading } = GetData();

  return (
    <section className={styles.hero}>
      {!isLoading && <h1>Auto Opti</h1>}
      {!isLoading && <p>{t('MainPage.heroTitle')}</p>}
      {!isLoading && <CallBtn />}
    </section>
  );
};

export default Hero;
