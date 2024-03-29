"use client";

import Button from "@/components/Button/Button";
import CallBtn from "@/components/CallBtn/CallBtn";
import Contacts from "@/components/Contacts/Contacts";
import Logo from "@/components/Logo/Logo";
import Navigation from "@/components/Navigation/Navigation";
import { SiteContext } from "@/context/SiteContext";
import React, { useContext } from "react";
import LeftNav from "./LeftNav/LeftNav";
import RightNav from "./RightNav/RightNav";
import styles from "./TabletFooter.module.scss";

const TabletFooter = () => {
  const { isXs } = useContext(SiteContext);
  if (isXs) {
    return;
  } else {
    return (
      <div className={`container ${styles.container}`}>
        <div className={styles.contactsWrapper}>
          <Logo className={styles.logo} />
          <Contacts className={styles.contacts} />
        </div>
        {/* <div className={styles.nav}> */}
        <LeftNav className={styles.nav} />
        <RightNav className={styles.nav} />
        {/* </div> */}

        <div className={styles.btnsBlock}>
          <CallBtn className={styles.btn} />
          <Button className={styles.btn} />
        </div>
      </div>
    );
  }
};

export default TabletFooter;
