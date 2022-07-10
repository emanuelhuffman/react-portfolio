import React from "react";
import styles from "./Blocks.module.css";

const Block = ({ color }) => {
  return (
    <div className={styles.block} style={{ background: color }}>
      {" "}
    </div>
  );
};

export default Block;
