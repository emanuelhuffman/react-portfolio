import { useState, useEffect } from "react";
import ArtList from "./components/ArtList";

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [art, setArt] = useState([]);

  const fetchArt = async () => {
    setIsLoading(true);
    const idResponse = await fetch(
      "https://collectionapi.metmuseum.org/public/collection/v1/objects?departmentIds=9"
    );
    const iDdata = await idResponse.json();
    const objIds = iDdata.objectIDs.slice(0, 15);

    for (let i = 0; i < objIds.length; i++) {
      let artResponse = await fetch(
        `https://collectionapi.metmuseum.org/public/collection/v1/objects/${objIds[i]}`
      );
      let artData = await artResponse.json();
      if (artData.primaryImage !== "") {
        setArt((prevArt) => [...prevArt, artData]);
        console.log(artData);
        setIsLoading(false);
      }
    }
  };

  const removePiece = (id) => {
    const updatedArt = art.filter((piece) => piece.objectID !== id);
    setArt(updatedArt);
  };

  useEffect(() => {
    fetchArt();
  }, []);

  if (isLoading) {
    return <div className="loading">Loading...</div>;
  } else if (art.length === 0) {
    return <div className="empty">No Art Here</div>;
  } else {
    return (
      <div>
        <ArtList art={art} removePiece={removePiece} />
      </div>
    );
  }
}

export default App;
