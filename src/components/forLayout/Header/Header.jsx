"use client";
import BurgerMenuBtn from "@/components/forLayout/Header/BurgerMenuBtn/BurgerMenuBtn";
import LogoutBtn from "@/components/LogoutBtn/LogoutBtn";
import React, { useCallback, useContext, useEffect } from "react";
import styles from "./header.module.scss";
import { useSession } from "next-auth/react";
import TranslatorBtnBlock from "./TranslatorBtnBlock/TranslatorBtnBlock";
import Logo from "@/components/Logo/Logo";
import Navigation from "@/components/Navigation/Navigation";
import { SiteContext } from "@/context/SiteContext";
import LeftLinks from "../../Navigation/LeftLinks";
import RightLinks from "@/components/Navigation/RightLinks";
import SocialLinks from "@/components/SocialLinks/SocialLinks";

const Header = () => {
  const session = useSession();
  const { burgerMenu, setBurgerMenu, isMobile, setIsMobile } =
    useContext(SiteContext);

  const closeBurgerMenu = () => {
    setTimeout(() => {
      setBurgerMenu(false);
    }, 250);
  };

  const handleResize = useCallback(() => {
    if (window.innerWidth <= 1279) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  }, [setIsMobile]);
  useEffect(() => {
    window.addEventListener("resize", handleResize);

    handleResize();

    return () => {
      window.addEventListener("resize", handleResize);
    };
  }, [handleResize]);

  return (
    <header className={styles.header}>
      <div className={`container ${styles.container}`}>
        {isMobile && <BurgerMenuBtn />}
        <LeftLinks />
        <Logo className={styles.logo} />
        <RightLinks />
        <div className={styles.btnsBlock}>
          <div className={styles.desktopBtnsWrap}>
            {!isMobile && <SocialLinks className={styles.socLinks} />}

            <TranslatorBtnBlock />
          </div>
          {/* {session.status === "authenticated" && !isLoading &&   {/* <LogoutBtn />} */}
          {session.status === "authenticated" && <LogoutBtn />}
          {/* <LogoutBtn /> */}
        </div>
      </div>
      {isMobile && (
        <nav
          className={
            burgerMenu
              ? styles.mobileNavigationVisible
              : styles.mobileNavigation
          }
        >
          <Navigation className={styles.navLinks} onClick={closeBurgerMenu} />
          <SocialLinks className={styles.socLinks} />
        </nav>
      )}
    </header>
  );
};

export default Header;
