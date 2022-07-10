import React from "react";
import styles from "./Display.module.css";
import { useSelector } from "react-redux";

const Display = () => {
  const colorToGuess = useSelector((state) => state.game.answer);

  return <div className={styles.display}>GUESS: {colorToGuess}</div>;
};

export default Display;
