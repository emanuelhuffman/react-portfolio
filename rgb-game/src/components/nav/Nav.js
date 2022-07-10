import React from "react";
import styles from "./Nav.module.css";
import { useSelector, useDispatch } from "react-redux";
import { newColors, changeLevel } from "../../actions";

const Nav = () => {
  const dispatch = useDispatch();
  const feedback = useSelector((state) => state.game.feedback);

  return (
    <div className={styles.nav}>
      <div className={styles.navBlock}>
        <span onClick={() => dispatch(newColors())} className={styles.btn}>
          New Colors
        </span>
      </div>
      <div className={styles.navBlock}>
        <div className={styles.spacer}>
          <div
            className={`${styles.feedback} ${
              feedback === "correct" ? styles.correct : ""
            } ${feedback === "wrong" ? styles.wrong : ""}`}
          >
            {feedback === "correct" ? <span>Correct!</span> : <span></span>}
            {feedback === "wrong" ? <span>Wrong</span> : <span></span>}
          </div>
        </div>
      </div>
      <div className={styles.navBlock}>
        <span
          onClick={() => dispatch(changeLevel("easy"))}
          className={styles.btn}
        >
          Easy
        </span>
        <span
          onClick={() => dispatch(changeLevel("hard"))}
          className={styles.btn}
        >
          Hard
        </span>
      </div>
    </div>
  );
};

export default Nav;
