import React from "react";
import styles from "./SocialLinks.module.scss";
import { socialLinks } from "@/data/socialLinks";
import Image from "next/image";

const SocialLinks = ({ className, iconSocialLink }) => {
  return (
    <ul className={styles.socialLinks + " " + `${className}`}>
      {socialLinks.map((item) => {
        return (
          <li
            key={item.id}
            className={styles.iconLink + " " + `${iconSocialLink}`}
          >
            <a href={item.href} target="_blank">
              <Image
                src={item.img}
                fill
                className={styles.svg}
                alt={item.title}
                title={item.title}
                sizes="(max-width: 768px) 24px, (max-width: 1440px) 34px"
              />
            </a>
          </li>
        );
      })}
    </ul>
  );
};

export default SocialLinks;
