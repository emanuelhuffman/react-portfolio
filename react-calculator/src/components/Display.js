import styles from "./Display.module.css";

const Display = (props) => {
  return <div className={styles.display}>{props.content}</div>;
};

export default Display;
