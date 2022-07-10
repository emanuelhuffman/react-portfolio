import React from "react";
import styles from "./Display.module.css";
import { useSelector } from "react-redux";

const Display = () => {
  const colorToGuess = useSelector((state) => state.game.answer);
  const feedback = useSelector((state) => state.game.feedback);

  return (
    <div className={styles.display}>
      <div className={styles.guessBox}>
        <div>GUESS THE COLOR</div>
        <div>{colorToGuess}</div>
      </div>
    </div>
  );
};

export default Display;
