import React from "react";
import styles from "./Modal.module.css";

const Modal = ({ setModal }) => {
  return (
    <div className={styles.background}>
      <div className={styles.container}>
        <h3>Are you sure you wish to do what you wish to do?</h3>
        <p>Doing this will cause your wish to come true.</p>
        <div className={styles.buttons}>
          <button onClick={() => setModal(false)} className={styles.cancel}>
            Cancel
          </button>
          <button onClick={() => setModal(false)} className={styles.continue}>
            Continue
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
