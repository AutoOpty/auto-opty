import Link from "next/link";
import React from "react";
import styles from "./Contacts.module.scss";

const Contacts = ({ className }) => {
  return (
    <ul className={styles.contacts + " " + `${className}`}>
      <li>
        <Link href="tel:+380966058605">+38 096 605 86 05</Link>
      </li>
      <li>
        <Link href="tel:+380966058605">+38 096 605 86 05</Link>
      </li>
      <li>
        <Link href="mailto:inbox.webevery@gmail.com">AutoOpti23@gmail.com</Link>
      </li>
    </ul>
  );
};

export default Contacts;
