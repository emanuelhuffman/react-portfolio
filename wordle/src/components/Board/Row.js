import React from "react";
import styles from "./Row.module.css";
import Letter from "./Letter";

const Row = ({ word = "     ", feedback = "00000" }) => {
  return (
    <div className={styles.row}>
      <Letter letter={word[0]} feedback={feedback[0]} />
      <Letter letter={word[1]} feedback={feedback[1]} />
      <Letter letter={word[2]} feedback={feedback[2]} />
      <Letter letter={word[3]} feedback={feedback[3]} />
      <Letter letter={word[4]} feedback={feedback[4]} />
    </div>
  );
};

export default Row;
