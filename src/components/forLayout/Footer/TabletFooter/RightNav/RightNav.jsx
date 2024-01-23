"use client";

import React from "react";
import { useTranslation } from "react-i18next";
import { navigationData, currentLanguages } from "@/data";
import styles from "./RightNav.module.scss";
import Link from "next/link";
import { usePathname } from "next/navigation";

const RightNav = ({ className }) => {
  const { i18n } = useTranslation();
  const pathname = usePathname();

  const leftLinks = navigationData.slice(2, 4).map((item) => {
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

export default RightNav;
