import "./styles.css";

const Display = ({ problem }) => {
  return (
    <div className="display-card">
      <div className="question">
        {problem[0]} x {problem[1]}
      </div>
    </div>
  );
};

export default Display;
