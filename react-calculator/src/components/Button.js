import styles from "./Button.module.css";

const Button = (props) => {
  return (
    <button
      value={props.value}
      onClick={props.onClick}
      className={styles.button}
    >
      {props.children}
    </button>
  );
};

export default Button;
