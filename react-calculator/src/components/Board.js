import styles from "./Board.module.css";
import Button from "./Button";

const Board = (props) => {
  const updateDisplay = (e) => {
    props.onDisplayUpdate(e.target.value);
  };

  return (
    <div className={styles.board}>
      <div className={styles.row}>
        <Button value="7" onClick={updateDisplay}>
          7
        </Button>
        <Button value="8" onClick={updateDisplay}>
          8
        </Button>
        <Button value="9" onClick={updateDisplay}>
          9
        </Button>
        <Button value="/" onClick={updateDisplay}>
          /
        </Button>
      </div>

      <div className={styles.row}>
        <Button value="4" onClick={updateDisplay}>
          4
        </Button>
        <Button value="5" onClick={updateDisplay}>
          5
        </Button>
        <Button value="6" onClick={updateDisplay}>
          6
        </Button>
        <Button value="*" onClick={updateDisplay}>
          *
        </Button>
      </div>

      <div className={styles.row}>
        <Button value="1" onClick={updateDisplay}>
          1
        </Button>
        <Button value="2" onClick={updateDisplay}>
          2
        </Button>
        <Button value="3" onClick={updateDisplay}>
          3
        </Button>
        <Button value="-" onClick={updateDisplay}>
          -
        </Button>
      </div>

      <div className={styles.row}>
        <Button value="AC" onClick={updateDisplay}>
          AC
        </Button>
        <Button value="0" onClick={updateDisplay}>
          0
        </Button>
        <Button value="=" onClick={updateDisplay}>
          =
        </Button>
        <Button value="+" onClick={updateDisplay}>
          +
        </Button>
      </div>
    </div>
  );
};

export default Board;
