import styles from "./ArtList.module.css";
import Art from "./Art";

const ArtList = ({ art, removePiece }) => {
  return (
    <div className={styles.card}>
      {art.map((piece) => {
        return (
          <Art key={piece.objectID} piece={piece} removePiece={removePiece} />
        );
      })}
    </div>
  );
};

export default ArtList;
