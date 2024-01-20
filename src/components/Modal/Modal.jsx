"use client";

import { useContext } from "react";
import Modal from "react-modal";
import { SiteContext } from "@/context/SiteContext";
import OrderForm from "../OrderForm/OrderForm";
import "./Modal.css";

// this modal is in the Layout now :)

const ModalR = () => {
    const { isModalOpen, closeModal } = useContext(SiteContext);

    return (
        <Modal
            isOpen={isModalOpen}
            overlayClassName={"backdrop"}
            className={"modalContent"}
            closeTimeoutMS={700}
            onRequestClose={closeModal}
            ariaHideApp={false}
        >
            {/* here must be imported children  like this < Child/>*/}
            <OrderForm />
            {/* {children} */}
        </Modal>
    );
};

export default ModalR;
