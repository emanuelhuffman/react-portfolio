import styles from "./PokeType.module.css";

const PokeType = ({ types, filterPokemonType }) => {
  return (
    <div className={styles.container}>
      <h1>Pokemon Types Filter</h1>
      <div className={styles.subContainer}>
        {types.map((type) => {
          return (
            <button key={type} onClick={() => filterPokemonType(type)}>
              {type}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default PokeType;
