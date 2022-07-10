import React from "react";
import Block from "./Block";
import styles from "./Blocks.module.css";
import { useSelector } from "react-redux";

const BlockList = () => {
  const rgbValues = useSelector((state) => state.game.rgbValues);

  return (
    <div className={styles.blockList}>
      {rgbValues.map((block, index) => (
        <Block key={index} color={block} />
      ))}
    </div>
  );
};

export default BlockList;
