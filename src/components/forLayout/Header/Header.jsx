"use client";
import BurgerMenuBtn from "@/components/forLayout/Header/BurgerMenuBtn/BurgerMenuBtn";
import LogoutBtn from "@/components/LogoutBtn/LogoutBtn";
import React from "react";
import styles from "./header.module.scss";
import { useSession } from "next-auth/react";
import TranslatorBtnBlock from "./TranslatorBtnBlock/TranslatorBtnBlock";

const Header = () => {
  const session = useSession();

  return (
    <header className={styles.header}>
      <div className={`container ${styles.container}`}>
        <BurgerMenuBtn />
        <TranslatorBtnBlock />
        {/* {session.status === "authenticated" && !isLoading &&   {/* <LogoutBtn />} */}
        {/* {session.status === "authenticated" && <LogoutBtn />} */}
        <LogoutBtn />
      </div>
    </header>
  );
};

export default Header;
