"use client"

import React from "react";
import Link from "next/link";
import { useState, useEffect } from "react";
import styles from "./footer.module.scss";
import MobileFooter from "./MobileFooter/MobileFooter";
import TabletFooter from "./TabletFooter/TabletFooter";

const Footer = () => {
  const [isLoad,setIsLoad]=useState(true)
  useEffect(()=>{setIsLoad(false)},[])

  return (
    <footer className={styles.footer}>
      {!isLoad && <MobileFooter />}
      {!isLoad && <TabletFooter />}
      <div className={styles.caption}>
        <p>ⓒ all rights reserved. Made by </p>{" "}
        <Link target="_blank" href="https://webevery.dev/">
          Webevery.dev
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
