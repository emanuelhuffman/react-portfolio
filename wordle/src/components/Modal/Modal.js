import React from "react";
import styles from "./Modal.module.css";

const Modal = ({ word, setModal, gameState, playAgain }) => {
  let modalText = "";
  if (gameState === "won") {
    modalText = "Congratulations! You got it right!";
  } else if (gameState === "lost") {
    modalText = "Oh no, you lost!";
  }
  return (
    <div className={styles.background}>
      <div className={styles.container}>
        <button className={styles.closeModal} onClick={() => setModal(false)}>
          x
        </button>
        <h1>{modalText}</h1>
        <h1>Word: {word}</h1>
        <button className={styles.playAgain} onClick={playAgain}>
          Play Again
        </button>
      </div>
    </div>
  );
};

export default Modal;
