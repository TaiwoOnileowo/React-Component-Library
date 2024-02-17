import React from "react";
import styles from "./Modal.module.css";
import { IoIosClose } from "react-icons/io";

const Modal = ({ isOpen, onClose, children,onOpen }) => {
  // if (!isOpen) return null;

  return (
    <>
      {isOpen ? (
        <div className={styles.overlay}>
          <div className={styles.modal}>
            <button className={styles.closeButton} onClick={onClose}>
              <IoIosClose size={30} />
            </button>
            {children}
          </div>
        </div>
      ) : (
        <div className={styles.openButtonContainer}>
          <button className={styles.openButton} onClick={onOpen}>Open Modal</button>
        </div>
      )}
    </>
  );
};

export default Modal;
