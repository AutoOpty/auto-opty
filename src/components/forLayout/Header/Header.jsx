import LogoutBtn from "@/components/LogoutBtn/LogoutBtn";
import React from "react";
import styles from "./header.module.scss";

const Header = () => {
  return (
    <header className={styles.header}>
      <p>Header</p>
      <LogoutBtn />
    </header>
  );
};

export default Header;
