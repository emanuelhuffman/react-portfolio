import React from "react";
import styles from "./Nav.module.css";

const Nav = () => {
  return (
    <div className={styles.nav}>
      <span>New Color</span>
      <div>
        <span>Easy</span>
        <span>Hard</span>
      </div>
    </div>
  );
};

export default Nav;
