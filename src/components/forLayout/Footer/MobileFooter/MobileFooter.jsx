"use client";

import Button from "@/components/Button/Button";
import CallBtn from "@/components/CallBtn/CallBtn";
import Contacts from "@/components/Contacts/Contacts";
import Navigation from "@/components/Navigation/Navigation";
import { SiteContext } from "@/context/SiteContext";
import React, { useContext } from "react";

import styles from "./MobileFooter.module.scss";

const MobileFooter = () => {
  const { isXs } = useContext(SiteContext);
  if (!isXs) {
    return;
  } else {
    return (
      <div className={styles.container}>
        <Navigation className={styles.nav} />
        <Contacts />
        <div className={styles.btnsBlock}>
          <CallBtn />
          <Button />
        </div>
      </div>
    );
  }
};

export default MobileFooter;
