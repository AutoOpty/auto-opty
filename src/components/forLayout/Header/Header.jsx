"use client";
import LogoutBtn from "@/components/LogoutBtn/LogoutBtn";
import React from "react";
import styles from "./header.module.scss";
import { useSession } from "next-auth/react";

const Header = () => {
  const session = useSession();

  return (
    <div className={styles.headerContainer}>
      <p>Header</p>

      {/* {session.status === "authenticated" && !isLoading && <LogoutBtn />} */}
      {session.status === "authenticated" && <LogoutBtn />}
    </div>
  );
};

export default Header;
