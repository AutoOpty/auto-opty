import React from "react";
import styles from "./logoutBtn.module.scss";
import { signOut } from "next-auth/react";

const LogoutBtn = () => {
  return (
    <button className={styles.logoutBtn} onClick={signOut}>
      Logout
    </button>
  );
};

export default LogoutBtn;
