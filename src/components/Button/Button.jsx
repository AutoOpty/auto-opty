"use client";

import { SiteContext } from "@/context/SiteContext";
import React, { useContext } from "react";
import styles from "./Button.module.scss";

const Button = ({ className, type }) => {
  const { openModal } = useContext(SiteContext);
  return (
    <button type="button" className={`btn  ${className}`} onClick={openModal}>
      Забронювати
    </button>
  );
};
export default Button;
