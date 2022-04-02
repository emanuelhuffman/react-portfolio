import { useState, useEffect } from "react";
import ArtList from "./components/ArtList";

function App() {
  const [art, setArt] = useState([]);

  const fetchArt = async () => {
    const idResponse = await fetch(
      "https://collectionapi.metmuseum.org/public/collection/v1/objects?departmentIds=9"
    );
    const iDdata = await idResponse.json();
    const objIds = iDdata.objectIDs.slice(0, 10);

    for (let i = 0; i < objIds.length; i++) {
      let artResponse = await fetch(
        `https://collectionapi.metmuseum.org/public/collection/v1/objects/${objIds[i]}`
      );
      let artData = await artResponse.json();
      setArt((prevArt) => [...prevArt, artData]);
      console.log(artData);
    }
  };

  useEffect(() => {
    fetchArt();
  }, []);

  return (
    <div>
      <ArtList art={art} />
    </div>
  );
}

export default App;
