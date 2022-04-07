import PokeCard from "./PokeCard";
import styles from "./PokeList.module.css";

const PokeList = ({ pokemon }) => {
  return (
    <div className={styles.container}>
      {pokemon.map((data) => {
        return (
          <PokeCard
            key={data.id}
            name={data.name}
            img={data.sprites.front_default}
            types={data.types}
          />
        );
      })}
    </div>
  );
};

export default PokeList;
