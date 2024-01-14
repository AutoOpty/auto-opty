"use client";
import BurgerMenuBtn from "@/components/forLayout/Header/BurgerMenuBtn/BurgerMenuBtn";
import LogoutBtn from "@/components/LogoutBtn/LogoutBtn";
import React, { useCallback, useContext, useEffect, useState } from "react";
import styles from "./header.module.scss";
import { useSession } from "next-auth/react";
import TranslatorBtnBlock from "./TranslatorBtnBlock/TranslatorBtnBlock";
import Logo from "@/components/Logo/Logo";
import Navigation from "@/components/Navigation/Navigation";
import { SiteContext } from "@/context/SiteContext";

const Header = () => {
  const session = useSession();
  const { burgerMenu, setBurgerMenu } = useContext(SiteContext);
  const [isMobile, setIsMobile] = useState(true);

  const closeBurgerMenu = () => {
    setTimeout(() => {
      setBurgerMenu(false);
    }, 250);
  };
  const handleResize = useCallback(() => {
    if (window.innerWidth <= 767) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  }, [window.innerWidth]);
  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.addEventListener("resize", handleResize);
    };
  }, [handleResize]);

  return (
    <header className={styles.header}>
      <div className={`container ${styles.container}`}>
        <BurgerMenuBtn />
        <Logo className={styles.logo} />
        <div className={styles.btnsBlock}>
          <TranslatorBtnBlock />
          {/* {session.status === "authenticated" && !isLoading &&   {/* <LogoutBtn />} */}
          {session.status === "authenticated" && <LogoutBtn />}
          {/* <LogoutBtn /> */}
        </div>
      </div>
      {isMobile && (
        <Navigation
          className={
            burgerMenu
              ? styles.mobileNavigationVisible
              : styles.mobileNavigation
          }
          // className={styles.mobileNavigationVisible}
          onClick={closeBurgerMenu}
        />
      )}
    </header>
  );
};

export default Header;
