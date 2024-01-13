import React from "react";
import styles from "./BurgerMenuBtn.module.scss";

const BurgerMenuBtn = () => {
  return (
    <button className={styles.btn}>
      <svg>
        <use href="symbol-defs.svg#icon-burgerMenu"></use>
      </svg>
    </button>
  );
};

export default BurgerMenuBtn;
