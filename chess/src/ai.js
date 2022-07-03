import { Chess } from "chess.js";
const pieceValue = { p: 1, r: 5, n: 3, b: 3, q: 9 };

export const ai = (fen) => {
  const moveValues = [];
  const aiMoves = [];
  const chess = new Chess(fen);
  const moves = chess.moves();
  let pieceToTake = "";
  let pieceScore = 0;
  moves.forEach((move) => {
    pieceToTake = chess.get(move.slice(-2));
    if (pieceToTake != null) {
      pieceScore = pieceValue[pieceToTake.type];
      moveValues.push(pieceScore);
      aiMoves.push(move);
    }
  });

  const max = Math.max(...moveValues);
  const index = moveValues.indexOf(max);
  let bestMove = "";
  if (aiMoves) {
    bestMove = aiMoves[index];
  }

  return bestMove;
};

// useEffect(() => {
//     if (autoPlay) {
//       if (!chess.game_over()) {
//         const interval = setInterval(() => {
//           const moves = chess.moves();
//           const move = moves[Math.floor(Math.random() * moves.length)];
//           chess.move(move);
//           setFen(chess.fen());
//         }, 1000);
//         return () => clearInterval(interval);
//       }
//     }
//   }, [autoPlay]);
