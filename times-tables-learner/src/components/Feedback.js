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
          Keys to the left let you pick which numbers to practice. Type your
          answer into the box below to begin!
        </div>
      )}
    </div>
  );
};

export default Feedback;
