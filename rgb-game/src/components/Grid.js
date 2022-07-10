import React from "react";
import Block from "./blocks/Block";
import BlockList from "./blocks/BlockList";
import styles from "./Grid.module.css";

const Grid = () => {
  return (
    <div className={styles.grid}>
      <BlockList />
    </div>
  );
};

export default Grid;
