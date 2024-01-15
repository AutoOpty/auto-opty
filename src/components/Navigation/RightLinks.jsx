"use client";

import React, { useContext } from "react";
import { SiteContext } from "@/context/SiteContext";
// import { useTranslation } from "react-i18next";
import styles from "./Navigation.module.scss";
import Link from "next/link";
import { navigationData } from "@/data";
import { useSession } from "next-auth/react";

const RightLinks = ({ className }) => {
  const { isMobile } = useContext(SiteContext);
  const session = useSession();

  return (
    <>
      {!isMobile && (
        <ul className={styles.rightLinks}>
          <li>
            <Link href={"/contacts"}>Контакти</Link>
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

//   const rightLinks = navigationData.slice(3, 6).map((item) => {
//     return (
//       <li id={item.id}>
//         <Link href={item.path}>{item.title}</Link>
//       </li>
//     );
//   });

//   return (
//     <>
//       {!isMobile && (
//         <ul className={styles.leftlinks + " " + `${className}`}>
//           {rightLinks}
//         </ul>
//       )}
//     </>
//   );
