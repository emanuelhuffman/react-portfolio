import styles from "./Art.module.css";

const Art = ({ piece }) => {
  return (
    <div className={styles.piece}>
      <h3>{piece.title}</h3>
      <img src={piece.primaryImage} />
    </div>
  );
};

export default Art;
