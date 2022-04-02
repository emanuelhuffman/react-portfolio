import styles from "./ArtList.module.css";
import Art from "./Art";

const ArtList = ({ art }) => {
  return (
    <div className={styles.card}>
      {art.map((piece) => {
        return <Art key={piece.objectID} piece={piece} />;
      })}
    </div>
  );
};

export default ArtList;
