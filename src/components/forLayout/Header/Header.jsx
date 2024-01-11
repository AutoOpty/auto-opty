import LogoutBtn from "@/components/LogoutBtn/LogoutBtn";
import React from "react";
import styles from "./header.module.scss";

const Header = () => {
  return (
    <div className={styles.headerContainer}>
      <p>Header</p>
      <LogoutBtn />
    </div>
  );
};

export default Header;
