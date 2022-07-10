import React from "react";
import styles from "./Blocks.module.css";
import { useDispatch } from "react-redux";
import { handleGuess } from "../../actions";

const Block = ({ color }) => {
  const dispatch = useDispatch();

  return (
    <div
      onClick={() => dispatch(handleGuess(color))}
      className={styles.block}
      style={{ background: color }}
    >
      {" "}
    </div>
  );
};

export default Block;
