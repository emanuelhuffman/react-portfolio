import styles from "./PokeCard.module.css";

const PokeCard = ({ name, img, types }) => {
  return (
    <div className={styles.container}>
      <h3>{name}</h3>
      <img src={img} />
      <div className={styles.types}>
        {types.map((type) => {
          return <div key={type.type.name}>{type.type.name}</div>;
        })}
      </div>
    </div>
  );
};

export default PokeCard;
