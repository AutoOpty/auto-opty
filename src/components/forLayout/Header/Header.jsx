"use client";
import BurgerMenuBtn from "@/components/forLayout/Header/BurgerMenuBtn/BurgerMenuBtn";
import LogoutBtn from "@/components/LogoutBtn/LogoutBtn";
import React, { useState, useCallback, useContext, useEffect } from "react";
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
  const [isLoad, setIsLoad] = useState(true);

  const isDocument = typeof document !== "undefined";

  useEffect(() => {
    setIsLoad(false);
  }, []);

  const {
    burgerMenu,
    setBurgerMenu,
    isMobile,
    setIsMobile,
    isXs,
    setIsXs,
    scrolledWindow,
    setScrolledWindow,
  } = useContext(SiteContext);

  const closeBurgerMenu = () => {
    setTimeout(() => {
      setBurgerMenu(false);
    }, 250);
  };

  const header = isDocument && document.getElementById("header");

  const headerScrollclassName = useCallback(() => {
    if (window.scrollY <= 12) {
      header.classList.remove(`${styles.Hidden}`);
      header.classList.add(`${styles.Visible}`);
    } else if (window.scrollY > scrolledWindow) {
      header.classList.add(`${styles.Hidden}`);
      header.classList.remove(`${styles.Visible}`);
    } else {
      header.classList.remove(`${styles.Hidden}`);
      header.classList.add(`${styles.Visible}`);
    }

    setScrolledWindow(window.scrollY);
  }, [scrolledWindow, setScrolledWindow, header.classList]);

  const handleResizeXs = useCallback(() => {
    if (window.innerWidth < 768) {
      setIsXs(true);
    } else {
      setIsXs((prev) => prev !== prev);
    }
  }, [setIsXs]);

  const handleResizeMobile = useCallback(() => {
    if (window.innerWidth < 1280) {
      setIsMobile(true);
    } else {
      setIsMobile((prev) => prev !== prev);
    }
  }, [setIsMobile]);

  useEffect(() => {
    window.addEventListener("resize", handleResizeXs);
    window.addEventListener("resize", handleResizeMobile);
    window.addEventListener("scroll", headerScrollclassName, { passive: true });

    handleResizeXs();
    handleResizeMobile();

    return () => {
      window.addEventListener("resize", handleResizeXs);
      window.addEventListener("resize", handleResizeMobile);
      window.removeEventListener("scroll", headerScrollclassName, {
        passive: true,
      });
    };
  }, [handleResizeXs, handleResizeMobile, headerScrollclassName]);

  return (
    <header className={styles.header} id="header">
      <div className={`container ${styles.container}`}>
        <BurgerMenuBtn />
        {!isLoad && <LeftLinks className={styles.headerLink} />}
        <Logo className={styles.logo} />
        <div className={styles.rightContent}>
          {!isLoad && <RightLinks className={styles.headerLink} />}
          <div className={styles.btnsBlock}>
            <div className={styles.desktopBtnsWrap}>
              {!isXs && <SocialLinks className={styles.socLinks} />}

              <TranslatorBtnBlock />
            </div>

            {session.status === "authenticated" && <LogoutBtn />}
            {/* <LogoutBtn /> */}
          </div>
        </div>
      </div>
      {(isXs || isMobile) && (
        <nav
          className={
            burgerMenu
              ? styles.mobileNavigationVisible
              : styles.mobileNavigation
          }
        >
          {!isLoad && (
            <Navigation className={styles.navLinks} onClick={closeBurgerMenu} />
          )}
          <SocialLinks className={styles.socLinks} />
        </nav>
      )}
    </header>
  );
};

export default Header;
