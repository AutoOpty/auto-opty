import React from "react";
import { useTranslation } from "react-i18next";
import styles from "./Navigation.module.scss";
import Link from "next/link";
import { navigationData } from "@/data";

const Navigation = ({ className, onClick, id }) => {
  const { i18n } = useTranslation();

  return (
    <ul className={styles.navContainer + " " + `${className}`} id={id}>
      {navigationData.map((item) => {
        return (
          <li key={item.id} onClick={onClick}>
            <Link href={item.path}>
              {/* {i18n.language === currentLanguages.EN
                ? item.titleEN
                : item.title} */}
              {item.title}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default Navigation;
