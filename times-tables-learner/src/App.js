import "./App.css";
import Card from "./components/Card";
import Selectors from "./components/Selectors";
import Input from "./components/Input";
import Display from "./components/Display";
import Feedback from "./components/Feedback";
import Modal from "./components/modal/Modal";
import { useReducer, useState, useEffect } from "react";

function reducer(state, action) {
  switch (action.type) {
    case "toggleNum":
      switch (action.payload.val) {
        case 1:
          return { ...state, one: !state.one };
        case 2:
          return { ...state, two: !state.two };
        case 3:
          return { ...state, three: !state.three };
        case 4:
          return { ...state, four: !state.four };
        case 5:
          return { ...state, five: !state.five };
        case 6:
          return { ...state, six: !state.six };
        case 7:
          return { ...state, seven: !state.seven };
        case 8:
          return { ...state, eight: !state.eight };
        case 9:
          return { ...state, nine: !state.nine };
        case 10:
          return { ...state, ten: !state.ten };
        case 11:
          return { ...state, eleven: !state.eleven };
        case 12:
          return { ...state, twelve: !state.twelve };
        default:
          return state;
      }
    default:
      return state;
  }
}

function App() {
  // Initialize problem
  useEffect(() => {
    const randProblem = generateProblem(selectorNums);
    setProblem(randProblem);
  }, []);

  // keep track of which selectors are used for generating problem
  const [selectors, dispatch] = useReducer(reducer, {
    one: false,
    two: false,
    three: false,
    four: false,
    five: false,
    six: false,
    seven: false,
    eight: false,
    nine: false,
    ten: false,
    eleven: false,
    twelve: false,
  });

  const [selectorNums, setSelectorNums] = useState([]);
  const [problem, setProblem] = useState([]);
  const [prevProblem, setPrevProblem] = useState([]);
  const [feedback, setFeedback] = useState("");
  const [isMultiplier, setIsMultiplier] = useState(false);
  const [isModal, setIsModal] = useState(false);

  const setSelector = (val) => {
    dispatch({ type: "toggleNum", payload: { val: val } });
    if (!selectorNums.includes(val)) {
      setSelectorNums((prevNums) => [...prevNums, val]);
    } else {
      setSelectorNums(selectorNums.filter((num) => num !== val));
    }
  };

  const sendAnswer = (answer) => {
    const solution = problem[0] * problem[1];
    if (parseInt(answer) === solution) {
      setFeedback("Correct!");
    } else {
      setFeedback("Incorrect!");
    }
    const randProblem = generateProblem(selectorNums);
    setPrevProblem(problem);
    setProblem(randProblem);
  };

  // generate random num from 1-12
  const rand12 = () => {
    return Math.floor(Math.random() * 12) + 1;
  };

  // generate problem to be displayed and evaluated against answer
  const generateProblem = (nums) => {
    if (nums.length === 0) {
      return [rand12(), rand12()];
    } else {
      const grabRandNum = Math.floor(Math.random() * nums.length);
      return [nums[grabRandNum], rand12()];
    }
  };

  return (
    <Card>
      {isModal && (
        <Modal isModal={isModal} closeModal={() => setIsModal(!isModal)} />
      )}
      <div>
        <button
          className="topBtns"
          onClick={() => setIsMultiplier(!isMultiplier)}
        >
          Multipliers
        </button>
        <button onClick={() => setIsModal(!isModal)} className="topBtns">
          Table
        </button>
      </div>
      {isMultiplier && (
        <Selectors setSelector={setSelector} selectors={selectors} />
      )}
      <div className="inputAndDisplay">
        <Feedback feedback={feedback} problem={prevProblem} />
        <Display problem={problem} />
        <Input sendAnswer={sendAnswer} />
      </div>
    </Card>
  );
}

export default App;
