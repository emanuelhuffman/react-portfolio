import React from "react";
import Key from "./Key";
import styles from "./Keyboard.module.css";
import { useState, useEffect } from "react";

const Keyboard = ({ attempt, word, attemptNum }) => {
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
  //0=default, 1=wrong, 2=wrongSpot, 3=correct
  const initFeedback = "00000000000000000000000000".split("");
  const [feedback, setFeedback] = useState(initFeedback);

  //Check letters that are used and update feedback
  const updateFeedback = () => {
    let index = 0;
    let newFeedback = [...feedback];
    for (let i = 0; i < attempt.length; i++) {
      index = alphabet.indexOf(attempt[i].toUpperCase());
      if (attempt[i].toUpperCase() == word[i]) {
        newFeedback[index] = "3";
      } else if (word.indexOf(attempt[i].toUpperCase()) > -1) {
        newFeedback[index] = "2";
      } else {
        newFeedback[index] = "1";
      }
      setFeedback(newFeedback);
    }
  };

  useEffect(() => {
    updateFeedback();
  }, [attempt]);

  useEffect(() => {
    if (attemptNum === 0) {
      setFeedback(initFeedback);
    }
  }, [attemptNum]);

  return (
    <div className={styles.keyboard}>
      {alphabet.map((letter, i) => (
        <Key key={letter} letter={letter} feedback={feedback[i]} />
      ))}
    </div>
  );
};

export default Keyboard;
