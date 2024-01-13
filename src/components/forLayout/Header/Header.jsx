"use client";
import LogoutBtn from "@/components/LogoutBtn/LogoutBtn";
import React from "react";
import styles from "./header.module.scss";
import { useSession } from "next-auth/react";

const Header = () => {
  const session = useSession();

  return (
    <header className={styles.header}>
      <p>Header</p>

      {/* {session.status === "authenticated" && !isLoading && <LogoutBtn />} */}
      {session.status === "authenticated" && <LogoutBtn />}
    </header>
  );
};

export default Header;
