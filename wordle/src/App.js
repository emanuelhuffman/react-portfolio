import Card from "./components/Board/Card";
import styles from "./App.module.css";
import Row from "./components/Board/Row";
import words from "./wordList.js";
import Keyboard from "./components/Keyboard/Keyboard";
import Modal from "./components/Modal/Modal";
import { useState } from "react";

function App() {
  const initAttempts = ["", "", "", "", "", ""];
  //0 = empty, 1 = wrong, 2 = wrongSpot, 3 = correct
  const initFeedback = ["00000", "00000", "00000", "00000", "00000", "00000"];

  const getWord = () => {
    return words.words[
      Math.floor(Math.random() * words.words.length) //Get word at random index
    ].toUpperCase();
  };

  const [modal, setModal] = useState(false);
  const [gameState, setGameState] = useState("playing"); //won or lost
  const [attemptNum, setAttemptNum] = useState(0);
  const [word, setWord] = useState(getWord);
  const [attempt, setAttempt] = useState("");
  const [attempts, setAttempts] = useState(initAttempts);
  const [prevAttempt, setPrevAttempt] = useState("");
  const [feedback, setFeedback] = useState(initFeedback);

  const checkLetter = (letter, index) => {
    if (letter.toUpperCase() == word[index]) {
      return "3"; //correct
    } else if (word.indexOf(letter.toUpperCase()) > -1) {
      return "2"; //wrongSpot
    } else {
      return "1"; //wrong
    }
  };

  const attemptHandler = (e) => {
    e.preventDefault();

    if (attempt.length === 5) {
      //Record the attempt into attemps array
      let updateAttempt = [...attempts];
      updateAttempt[attemptNum] = attempt.toUpperCase();
      setAttempts(updateAttempt);

      //Style Letter Feedback
      let fb = "";
      for (let i = 0; i < 5; i++) {
        fb = fb.concat(checkLetter(attempt[i], i));
      }
      let updateFeedback = [...feedback];
      updateFeedback[attemptNum] = fb;
      setFeedback(updateFeedback);

      //Check if won
      if (attempt.toUpperCase() === word) {
        setGameState("won");
        setModal(true);
      } else if (attemptNum === 5) {
        setGameState("lost");
        setModal(true);
      }

      //Move to next attempt
      setPrevAttempt(attempt);
      setAttemptNum(attemptNum + 1);
      setAttempt("");
    }
  };

  //Only return attempt if it is a row's turn
  const inputTurn = (num) => {
    if (attemptNum == num) {
      return attempt.toUpperCase();
    }
  };

  const playAgain = () => {
    setAttempts(initAttempts);
    setFeedback(initFeedback);
    setAttemptNum(0);
    setModal(false);
    setGameState("playing");
    setWord(getWord);
  };

  return (
    <div className={styles.container}>
      {modal && (
        <Modal
          word={word}
          setModal={setModal}
          gameState={gameState}
          playAgain={playAgain}
        />
      )}
      <h1 className={styles.title}>Computer Science Wordle</h1>
      <Card>
        <Row
          word={attemptNum == 0 ? inputTurn(0) : attempts[0]}
          feedback={feedback[0]}
        />
        <Row
          word={attemptNum == 1 ? inputTurn(1) : attempts[1]}
          feedback={feedback[1]}
        />
        <Row
          word={attemptNum == 2 ? inputTurn(2) : attempts[2]}
          feedback={feedback[2]}
        />
        <Row
          word={attemptNum == 3 ? inputTurn(3) : attempts[3]}
          feedback={feedback[3]}
        />
        <Row
          word={attemptNum == 4 ? inputTurn(4) : attempts[4]}
          feedback={feedback[4]}
        />
        <Row
          word={attemptNum == 5 ? inputTurn(5) : attempts[5]}
          feedback={feedback[5]}
        />

        <form onSubmit={attemptHandler}>
          <input
            className={styles.inputField}
            type="text"
            value={attempt.toUpperCase()}
            maxLength="5"
            autoFocus={true}
            onBlur={({ target }) => target.focus()}
            onChange={(e) => setAttempt(e.target.value)}
          ></input>
        </form>
      </Card>
      <Keyboard attempt={prevAttempt} word={word} attemptNum={attemptNum} />
    </div>
  );
}

export default App;
