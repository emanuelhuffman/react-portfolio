import React from "react";
import styles from "./Letter.module.css";

const Letter = ({ letter, feedback }) => {
  let feedbackClass = "";
  switch (feedback) {
    case "1":
      feedbackClass = "wrong";
      break;
    case "2":
      feedbackClass = "wrongSpot";
      break;
    case "3":
      feedbackClass = "correct";
      break;
    default:
      feedbackClass = "";
  }

  const classes = `${styles.box} ${styles[feedbackClass]}`;

  return <div className={classes}>{letter}</div>;
};

export default Letter;
