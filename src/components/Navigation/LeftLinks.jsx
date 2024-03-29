"use client";

import React, { useContext } from "react";
import { SiteContext } from "@/context/SiteContext";
import { useTranslation } from "react-i18next";
import styles from "./Navigation.module.scss";
import Link from "next/link";
import { navigationData, currentLanguages } from "@/data";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

const LeftLinks = ({ className }) => {
  const { i18n } = useTranslation();
  const pathname = usePathname();

  const { isMobile } = useContext(SiteContext);

  const leftLinks = navigationData.slice(0, 3).map((item) => {
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
    <>
      {!isMobile && (
        <ul className={styles.leftlinks + " " + `${className}`}>{leftLinks}</ul>
      )}
    </>
  );
};

export default LeftLinks;
