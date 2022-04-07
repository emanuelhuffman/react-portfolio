import { useState, useEffect } from "react";
import PokeList from "./components/PokeList";
import styles from "./App.module.css";
import PokeType from "./components/PokeType";

function App() {
  const [pokemon, setPokemon] = useState([]);
  const [types, setTypes] = useState([]);
  const [filteredPokemon, setFilteredPokemon] = useState([]);
  const [index, setIndex] = useState(1);

  // Gather types from pokemon and store in types
  const loadTypes = () => {
    const newTypes = new Set();
    pokemon.map((data) => {
      data.types.map((typesList) => {
        newTypes.add(typesList.type.name);
      });
    });
    
    // Make set an array to spread into types
    const newTypesArr = Array.from(newTypes);
    setTypes(["all", ...newTypesArr]);
  };

  // fetch pokemon from API
  const fetchPokemon = async (numToLoad) => {
    for (let i = index; i < index + numToLoad; i++) {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`);
      const data = await response.json();
      setPokemon((prevPokemon) => [...prevPokemon, data]);
    }
    setIndex(index + numToLoad);
  };

  //Filter pokemon based off type
  const filterPokemonType = (type) => {
    if (type === "all") {
      setFilteredPokemon(pokemon);
    } else {
      setFilteredPokemon(
        pokemon.filter((poke) =>
          poke.types.some((objType) => objType.type.name === type)
        )
      );
    }
  };

  const loadMore = () => {
    fetchPokemon(10);
  };

  useEffect(() => {
    fetchPokemon(10);
  }, []);

  useEffect(() => {
    loadTypes();
    setFilteredPokemon(pokemon);
  }, [pokemon]);

  return (
    <div className={styles.container}>
      <PokeType filterPokemonType={filterPokemonType} types={types} />
      <PokeList pokemon={filteredPokemon} />
      <button className={styles.loadButton} onClick={loadMore}>
        Load 10 More
      </button>
    </div>
  );
}

export default App;
