"use client";

import React from "react";
import styles from "./ModalForm.module.scss";
const ModalForm = () => {
  return (
    <form action="#">
      <label className={styles.label}>
        label
        <input type="text" />
      </label>
    </form>
  );
};

export default ModalForm;
