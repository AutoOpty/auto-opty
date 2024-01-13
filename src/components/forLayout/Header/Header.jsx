"use client";
import BurgerMenuBtn from "@/components/forLayout/Header/BurgerMenuBtn/BurgerMenuBtn";
import LogoutBtn from "@/components/LogoutBtn/LogoutBtn";
import React from "react";
import styles from "./header.module.scss";
import { useSession } from "next-auth/react";
import TranslatorBtnBlock from "./TranslatorBtnBlock/TranslatorBtnBlock";
import Logo from "@/components/Logo/Logo";

const Header = () => {
  const session = useSession();

  return (
    <header className={styles.header}>
      <div className={`container ${styles.container}`}>
        <BurgerMenuBtn />
        <Logo className={styles.logo} />
        <div className={styles.btnsBlock}>
          <TranslatorBtnBlock />
          {/* {session.status === "authenticated" && !isLoading &&   {/* <LogoutBtn />} */}
          {/* {session.status === "authenticated" && <LogoutBtn />} */}
          {/* <LogoutBtn /> */}
        </div>
      </div>
    </header>
  );
};

export default Header;
