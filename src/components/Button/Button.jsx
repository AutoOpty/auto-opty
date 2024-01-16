"use client";

import { SiteContext } from "@/context/SiteContext";
import React, { useContext } from "react";
import styles from "./Button.module.scss";

const Button = ({ className, type }) => {
  const { state, setState } = useContext(SiteContext);
  return (
    <button
      type="button"
      className={`btn ${className}`}
      onClick={() => {
        console.log("Button is clicked"), setState(!state);
      }}
    >
      Забронювати
    </button>
  );
};
export default Button;
