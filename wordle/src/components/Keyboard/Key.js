import React from "react";
import styles from "./Key.module.css";

const Key = ({ letter, feedback }) => {
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
  return (
    <div className={`${styles.key} ${styles[feedbackClass]}`}>{letter}</div>
  );
};

export default Key;
