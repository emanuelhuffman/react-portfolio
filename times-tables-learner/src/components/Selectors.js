import "./styles.css";

const Selectors = ({ setSelector, selectors }) => {
  return (
    <div className="table-buttons">
      <button
        className={selectors.one ? "number-active" : ""}
        onClick={() => setSelector(1)}
      >
        1
      </button>
      <button
        className={selectors.two ? "number-active" : ""}
        onClick={() => setSelector(2)}
      >
        2
      </button>
      <button
        className={selectors.three ? "number-active" : ""}
        onClick={() => setSelector(3)}
      >
        3
      </button>

      <button
        className={selectors.four ? "number-active" : ""}
        onClick={() => setSelector(4)}
      >
        4
      </button>
      <button
        className={selectors.five ? "number-active" : ""}
        onClick={() => setSelector(5)}
      >
        5
      </button>
      <button
        className={selectors.six ? "number-active" : ""}
        onClick={() => setSelector(6)}
      >
        6
      </button>

      <button
        className={selectors.seven ? "number-active" : ""}
        onClick={() => setSelector(7)}
      >
        7
      </button>
      <button
        className={selectors.eight ? "number-active" : ""}
        onClick={() => setSelector(8)}
      >
        8
      </button>
      <button
        className={selectors.nine ? "number-active" : ""}
        onClick={() => setSelector(9)}
      >
        9
      </button>

      <button
        className={selectors.ten ? "number-active" : ""}
        onClick={() => setSelector(10)}
      >
        10
      </button>
      <button
        className={selectors.eleven ? "number-active" : ""}
        onClick={() => setSelector(11)}
      >
        11
      </button>
      <button
        className={selectors.twelve ? "number-active" : ""}
        onClick={() => setSelector(12)}
      >
        12
      </button>
    </div>
  );
};

export default Selectors;
