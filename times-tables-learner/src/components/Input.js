import "./styles.css";
import { useState } from "react";

const Input = ({ sendAnswer }) => {
  const [answer, setAnswer] = useState();

  const submitHandler = (e) => {
    e.preventDefault();
    sendAnswer(answer);
    setAnswer("");
  };

  return (
    <div className="form-box">
      <form onSubmit={submitHandler}>
        <input
          type="text"
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
        ></input>
      </form>
    </div>
  );
};

export default Input;
