import BurgerMenuBtn from "@/components/forLayout/Header/BurgerMenuBtn/BurgerMenuBtn";
import LogoutBtn from "@/components/LogoutBtn/LogoutBtn";
import React from "react";
import styles from "./header.module.scss";
import TranslatorBtnBlock from "./TranslatorBtnBlock/TranslatorBtnBlock";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={`container ${styles.container}`}>
        <BurgerMenuBtn />
        <TranslatorBtnBlock />
        {/* <LogoutBtn /> */}
      </div>
    </header>
  );
};

export default Header;
