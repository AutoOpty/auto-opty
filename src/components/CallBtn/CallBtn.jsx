"use client";
import Link from "next/link";
import React from "react";
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import styles from "./CallBtn.module.scss";

const CallBtn = ({ className }) => {
  const { t } = useTranslation();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(false);
  }, []);
  return (
    <Link href="tel:+380503738465" className={`btn ${styles.btn} ${className}`}>
      {!isLoading && t("Buttons.CalltBtn")}
    </Link>
  );
};

export default CallBtn;
