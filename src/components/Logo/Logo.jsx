import React from "react";
import styles from "./Logo.module.scss";
import Link from "next/link";
import Image from "next/image";

const Logo = ({ className }) => {
  return (
    <Link
      href="/"
      prefetch={false}
      className={styles.container + " " + `${className}`}
    >
      <svg>
        <use href="/sprite.svg#icon-AutoOpti"></use>
      </svg>
    </Link>
  );
};

export default Logo;
