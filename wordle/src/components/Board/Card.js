import styles from "./Card.module.css";

import React from "react";

const Card = (props) => {
  return <div className={styles.container}>{props.children}</div>;
};

export default Card;
