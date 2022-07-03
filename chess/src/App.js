import "./App.css";
import { Chessboard } from "react-chessboard";
import { Chess } from "chess.js";
import { useEffect, useState } from "react";
import { ai } from "./ai";

const chess = new Chess();

function App() {
  const [fen, setFen] = useState("start");
  let autoPlay = false;

  //ai
  useEffect(() => {
    if (chess.turn() === "b") {
      const aiMove = ai(chess.fen());
      if (aiMove) {
        chess.move(aiMove);
      } else {
        const moves = chess.moves();
        const move = moves[Math.floor(Math.random() * moves.length)];
        chess.move(move);
      }
      setFen(chess.fen());
    }
  }, [chess.turn()]);

  const handleDrop = (sqr, targetSqr, piece) => {
    if (chess.move(`${sqr}${targetSqr}`, { sloppy: true })) {
      setFen(chess.fen());
      return true;
    }
    return false;
  };

  return (
    <div className="App">
      <Chessboard
        boardOrientation="white"
        areArrowsAllowed="True"
        draggable={true}
        position={fen}
        customArrowColor="rgb(132, 33, 181)"
        onPieceDrop={handleDrop}
      />
    </div>
  );
}

export default App;
