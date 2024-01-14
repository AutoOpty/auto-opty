"use client";

import React, { useContext } from "react";
import { SiteContext } from "@/context/SiteContext";
// import { useTranslation } from "react-i18next";
import styles from "./Navigation.module.scss";
import Link from "next/link";
import { navigationData } from "@/data";

const LeftLinks = ({ className }) => {
  const { isMobile, setIsMobile } = useContext(SiteContext);

  const leftLinks = navigationData.slice(0, 3).map((item) => {
    return (
      <li key={item.id}>
        <Link href={item.path}>{item.title}</Link>
      </li>
    );
  });

  return (
    <>
      {!isMobile && (
        <ul className={styles.leftlinks + " " + `${className}`}>{leftLinks}</ul>
      )}
    </>
  );
};

export default LeftLinks;

// const LeftLinks = () => {
//   <ul className={styles.navContainer + " " + `${className}`}>
//     {navigationData.map((item) => {
//       return (
//         <li key={item.id} onClick={onClick}>
//           <Link href={item.path}>
//             {/* {i18n.language === currentLanguages.EN
//                     ? item.titleEN
//                     : item.title} */}
//             {item.title}
//           </Link>
//         </li>
//       );
//     })}
//   </ul>;
// };

// export default LeftLinks;