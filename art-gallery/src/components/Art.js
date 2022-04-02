import styles from "./Art.module.css";
import { useState } from "react";

const Art = ({ piece, removePiece }) => {
  const [showMoreInfo, setShowMoreInfo] = useState(false);

  const info = () => {
    return (
      <div className={styles.showMore}>
        <div>
          <b>Artist:</b> {piece.artistDisplayName}
        </div>
        <div>
          <b>Medium:</b> {piece.medium}
        </div>
        <div>
          <b>Dimensions</b> {piece.dimensions}
        </div>
      </div>
    );
  };

  return (
    <div className={styles.piece}>
      <img src={piece.primaryImage} />
      <h2>{piece.title}</h2>
      {showMoreInfo && info()}
      <div className={styles.buttonGroup}>
        <button onClick={() => removePiece(piece.objectID)}>
          Not Interested
        </button>
        <button onClick={() => setShowMoreInfo(!showMoreInfo)}>
          {showMoreInfo ? "Show Less" : "More Information"}
        </button>
      </div>
    </div>
  );
};

export default Art;
