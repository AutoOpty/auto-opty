"use client";

import { SiteContext } from "@/context/SiteContext";
import React, { useContext } from "react";
import { useTranslation } from "react-i18next";
import styles from "./Button.module.scss";

const Button = ({ className, type }) => {
  const { openModal } = useContext(SiteContext);
  const {t}=useTranslation()
  return (
    <button type="button" className={`btn  ${className}`} onClick={openModal}>
      {t('Buttons.OrderBtn')}
    </button>
  );
};
export default Button;
