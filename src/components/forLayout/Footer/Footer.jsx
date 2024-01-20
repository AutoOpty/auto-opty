import React from "react";
import Link from "next/link";
import styles from "./footer.module.scss";
import MobileFooter from "./MobileFooter/MobileFooter";
import TabletFooter from "./TabletFooter/TabletFooter";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <MobileFooter />
      <TabletFooter />
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
