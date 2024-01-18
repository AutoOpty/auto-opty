"use client";

import React, { useContext } from "react";
import { SiteContext } from "@/context/SiteContext";
import { useTranslation } from "react-i18next";
import styles from "./Navigation.module.scss";
import Link from "next/link";
import { navigationData } from "@/data";
import { useSession } from "next-auth/react";

const RightLinks = ({ className }) => {
  const { isXs, isMobile } = useContext(SiteContext);
  const session = useSession();

  const { t } = useTranslation();

  return (
    <>
      {!isMobile && (
        <ul className={styles.rightLinks}>
          <li>
            <Link href={"/contacts"}>{t("Navigation.Contacts")}</Link>
          </li>

          {session.status === "authenticated" && (
            <li>
              <Link href={"/dashboard"}>Адмінпанель</Link>
            </li>
          )}
        </ul>
      )}
    </>
  );
};

export default RightLinks;
