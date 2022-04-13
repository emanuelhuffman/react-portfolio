import React from "react";
import styles from "./Home.module.css";

const Home = ({ setModal }) => {
  return (
    <div className={styles.container}>
        <button className={styles.btn} onClick={() => setModal(true)}>
      Click for Modal
    </button>
    </div>
  );
};

export default Home;
