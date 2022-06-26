import "./styles.css";

const Feedback = ({ feedback, problem }) => {
  const classes = feedback === "Correct!" ? "correct" : "incorrect";
  const solution = feedback === "Correct!" ? "" : problem[0] * problem[1];

  return (
    <div className="display-card">
      {feedback !== "" && (
        <div className={"feedback " + classes}>
          <div>{feedback}</div>
          {feedback !== "Correct!" && feedback !== "" && (
            <div className="correct-answer">
              {problem[0]} * {problem[1]} = {solution}
            </div>
          )}
        </div>
      )}
      {feedback === "" && (
        <div className="initial-feedback">
          Welcome! Enter the answer to the problem in the box below. Click the
          multipliers button to select which numbers to practice.
        </div>
      )}
    </div>
  );
};

export default Feedback;
