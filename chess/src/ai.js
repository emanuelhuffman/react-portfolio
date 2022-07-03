import { Chess } from "chess.js";
// const bPieceValue = { p: 1, r: 5, n: 3, b: 3, q: 9 };
// const wPieceValue = { P: 1, R: 5, N: 3, B: 3, Q: 9 };
const bScoreMult = -1;
const wScoreMult = 1;
const pieceValues = {
  p: -1,
  r: -5,
  n: -3,
  b: -3,
  q: -9,
  P: 1,
  R: 5,
  N: 3,
  B: 3,
  Q: 9,
};
const pieces = ["p", "r", "n", "b", "q", "P", "R", "N", "B", "Q"];

export const depth = (fen) => {
  const chess = new Chess(fen);
  let bestScoringMove = "";

  if (!chess.game_over()) {
    let scores = scoreForAllMoves(fen);

    if (scores.length != 0) {
      bestScoringMove = Object.keys(scores).reduce((a, b) =>
        scores[a] < scores[b] ? a : b
      );
    }
  }
  return bestScoringMove;
};

//score of all moves: negative for black, positive for white
const scoreForAllMoves = (fen) => {
  const moveScores = {};
  const chess = new Chess(fen);
  const moves = chess.moves();

  //populate move values with current board score
  moves.forEach((move) => {
    moveScores[move] = boardScore(chess.fen());
  });

  //check all player moves
  moves.forEach((move) => {
    chess.move(move);
    if (chess.in_checkmate()) {
      moveScores[move] = -1000;
    } else {
      if (boardScore(chess.fen()) <= moveScores[move]) {
        moveScores[move] = boardScore(chess.fen()); //current board score + what will it be after move is made
      }
    }

    //Check all opponent moves
    const moves2 = chess.moves();
    moves2.forEach((move2) => {
      chess.move(move2);
      if (chess.in_checkmate()) {
        moveScores[move] = 100;
      } else {
        if (boardScore(chess.fen()) > moveScores[move]) {
          moveScores[move] = boardScore(chess.fen());
          console.log(moveScores);
        }
      }
      chess.undo();
    });

    chess.undo();
  });

  return moveScores;
};

//return score: negative for black, positive for white
const boardScore = (fen) => {
  let score = 0;
  const sFen = stripToPieces(fen);
  for (let i = 0; i < sFen.length; i++) {
    score += pieceValues[sFen[i]];
  }

  return score;
};

//strip fen down to just pieces
const stripToPieces = (fen) => {
  let strippedFen = "";
  let i = 0;

  while (fen[i] !== " ") {
    if (pieces.includes(fen[i])) {
      strippedFen += fen[i];
    }
    i++;
  }

  return strippedFen;
};
