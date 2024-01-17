"use client";

import { useContext } from "react";
import { SiteContext } from "@/context/SiteContext";
import ModalR from "@/components/Modal/Modal";
import OrderForm from "@/components/OrderForm/OrderForm";
import styles from "./footer.module.scss";

const Footer = () => {
    const { isModalOpen, openModal, closeModal } = useContext(SiteContext);
    return (
        <footer className={styles.footer}>
            <ModalR isOpen={isModalOpen} closeModal={closeModal}>
                <OrderForm isOpen={isModalOpen} closeModal={closeModal} />
            </ModalR>
            Footer
            <button onClick={openModal}>Open modal</button>
        </footer>
    );
};

export default Footer;
