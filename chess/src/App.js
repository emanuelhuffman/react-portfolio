import "./App.css";
import { Chessboard } from "react-chessboard";
import { Chess } from "chess.js";
import { useEffect, useState } from "react";

const chess = new Chess();

function App() {
  const [fen, setFen] = useState("start");

  // useEffect(() => {
  //   if (!chess.game_over()) {
  //     const interval = setInterval(() => {
  //       const moves = chess.moves();
  //       const move = moves[Math.floor(Math.random() * moves.length)];
  //       chess.move(move);
  //       setFen(chess.fen());
  //       console.log(chess.fen());
  //     }, 500);
  //     return () => clearInterval(interval);
  //   }
  // }, []);

  return (
    <div className="App">
      <Chessboard position={fen} />
    </div>
  );
}

export default App;
