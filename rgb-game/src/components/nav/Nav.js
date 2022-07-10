import React from "react";
import styles from "./Nav.module.css";

const Nav = () => {
  return (
    <div className={styles.nav}>
      <span>Skip</span>
      <div>
        <span>Easy</span>
        <span>Hard</span>
      </div>
    </div>
  );
};

export default Nav;
