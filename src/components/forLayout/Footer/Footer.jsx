"use client";

import { useContext } from "react";
import { SiteContext } from "@/context/SiteContext";
import ModalR from "@/components/Modal/Modal";
import styles from "./footer.module.scss";

const Footer = () => {
    const { isModalOpen, openModal, closeModal } = useContext(SiteContext);
    return (
        <footer className={styles.footer}>
            <ModalR isOpen={isModalOpen} closeModal={closeModal}>
                <h2>Here will be Form</h2>
            </ModalR>
            Footer
            <button onClick={openModal}>Open modal</button>
        </footer>
    );
};

export default Footer;
