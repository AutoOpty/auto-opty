"use client";

import React, { useContext } from "react";
import { SiteContext } from "@/context/SiteContext";
import { useTranslation } from "react-i18next";
import styles from "./Navigation.module.scss";
import Link from "next/link";
import { useSession } from "next-auth/react";
import { usePathname } from "next/navigation";

const RightLinks = ({ className }) => {
  const { isMobile } = useContext(SiteContext);
  const session = useSession();
  const pathname = usePathname();

  const { t } = useTranslation();

  return (
    <>
      {!isMobile && (
        <ul className={`${styles.rightLinks} ${className}`}>
          <li className={pathname === "/contacts" ? "linkActive" : "linkHover"}>
            <Link href={"/contacts"}>{t("Navigation.Contacts")}</Link>
          </li>

          {session.status === "authenticated" && (
            <li
              className={pathname === "/dashboard" ? "linkActive" : "linkHover"}
            >
              <Link href={"/dashboard"}>{t("Navigation.Dashboard")}</Link>
            </li>
          )}
        </ul>
      )}
    </>
  );
};

export default RightLinks;
