"use client";

import React, { useContext } from "react";
import { SiteContext } from "@/context/SiteContext";
import styles from "./BurgerMenuBtn.module.scss";

const BurgerMenuBtn = () => {
  const { burgerMenu, setBurgerMenu, isMobile } = useContext(SiteContext);
  // console.log("burgerMenu", burgerMenu);
  return (
    <>
      {isMobile && (
        <button
          className={styles.btn}
          // id={id}
          onClick={() => {
            setBurgerMenu(!burgerMenu);
          }}
          aria-label="Button burger menu"
          title="Burger Menu"
        >
          {/* <svg>
        <use href="symbol-defs.svg#icon-burgerMenu"></use>
      </svg> */}
          {burgerMenu ? (
            <svg className={styles.iconClose}>
              <use href="/sprite.svg#icon-close" />
            </svg>
          ) : (
            <svg>
              <use href="sprite.svg#icon-burgerMenu"></use>
            </svg>
          )}
        </button>
      )}
    </>
  );
};

export default BurgerMenuBtn;
