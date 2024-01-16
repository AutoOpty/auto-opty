"use client";
import Link from "next/link";
import { useContext } from "react";
import { SiteContext } from "@/context/SiteContext";
import ModalR from "@/components/Modal/Modal";
import styles from "./footer.module.scss";
import MobileFooter from "./MobileFooter/MobileFooter";

const Footer = () => {
  const { isModalOpen, openModal, closeModal } = useContext(SiteContext);
  return (
    <footer className={styles.footer}>
      <ModalR isOpen={isModalOpen} closeModal={closeModal}>
        <h2>Here will be Form</h2>
      </ModalR>
      <Mobile Footer />
      <div className={styles.caption}>
        <p>ⓒ all rights reserved. Made by </p>{" "}
        <Link target="_blank" href="https://webevery.dev/">
          Webevery.dev
        </Link>
      </div>

      <button onClick={openModal}>Open modal</button>
    </footer>
  );
};

export default Footer;
