"use client";

import React from "react";
import { useTranslation } from "react-i18next";
import { navigationData, currentLanguages } from "@/data";
import styles from "./LeftNav.module.scss";
import Link from "next/link";
import { usePathname } from "next/navigation";

const LeftNav = ({ className }) => {
  const { i18n } = useTranslation();
  const pathname = usePathname();

  const leftLinks = navigationData.slice(0, 2).map((item) => {
    return (
      <li
        key={item.id}
        className={pathname === item.path ? "linkActive" : "linkHover"}
      >
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

export default LeftNav;
