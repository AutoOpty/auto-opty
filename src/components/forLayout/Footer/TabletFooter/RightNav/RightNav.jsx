"use client";

import React from "react";
import { useTranslation } from "react-i18next";
import { navigationData, currentLanguages } from "@/data";
import styles from "./RightNav.module.scss";
import Link from "next/link";

const RightNav = ({ className }) => {
  const { i18n } = useTranslation();

  const leftLinks = navigationData.slice(3, 5).map((item) => {
    return (
      <li key={item.id}>
        <Link href={item.path}>
          {i18n.language === currentLanguages.EN ? item.titleEN : item.title}
        </Link>
      </li>
    );
  });
  return (
    <ul className={styles.leftlinks + " " + `${className}`}>{leftLinks}</ul>
  );
};

export default RightNav;
