import React from "react";
import styles from "./LogoutBtn.module.scss";
import { signOut } from "next-auth/react";

const LogoutBtn = () => {
  return (
    <button className={styles.logoutBtn} onClick={signOut}>
      {/* <Link className={styles.editLink} href={`/dashboard/${product._id}`}> */}
      <svg className={styles.exitIcon}>
        <use href="/sprite.svg#icon-exit" />
      </svg>
      {/* </Link> */}
      {/* Розлогінитися */}
    </button>
  );
};

export default LogoutBtn;
