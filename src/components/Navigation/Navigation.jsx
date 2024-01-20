"use client";
import React from "react";
import { useTranslation } from "react-i18next";
import styles from "./Navigation.module.scss";
import Link from "next/link";
import { navigationData, currentLanguages } from "@/data";
import { useSession } from "next-auth/react";

const Navigation = ({ className, onClick, id }) => {
  const { i18n } = useTranslation();

  const session = useSession();
  let navLink;
  if (session.status === "authenticated") {
    navLink = navigationData.map((item) => {
      return (
        <li key={item.id} onClick={onClick}>
          <Link href={item.path}>
            {i18n.language === currentLanguages.EN ? item.titleEN : item.title}
          </Link>
        </li>
      );
    });
  } else {
    navLink = navigationData.slice(0, 4).map((item) => {
      return (
        <li key={item.id} onClick={onClick}>
          <Link href={item.path}>
            {i18n.language === currentLanguages.EN ? item.titleEN : item.title}
          </Link>
        </li>
      );
    });
  }

  return (
    <ul className={styles.navContainer + " " + `${className}`} id={id}>
      {navLink}
    </ul>
  );
};

export default Navigation;
