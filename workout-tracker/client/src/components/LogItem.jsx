import { useDispatch } from "react-redux";
import { deleteLog, setIsEditing } from "../features/logs/logSlice";

function LogItem({ log }) {
  const dispatch = useDispatch();

  return (
    <div className="log">
      <div>
        {new Date(log.date).toLocaleString([], {
          year: "numeric",
          month: "numeric",
          day: "numeric",
        })}
      </div>
      <h2>{log.text}</h2>
      {log.exercises.map((exercise, index) => (
        <div key={index}>
          {exercise.name} - {exercise.weight}lbs - {exercise.sets} sets -{" "}
          {exercise.reps} reps
        </div>
      ))}
      <button onClick={() => dispatch(deleteLog(log._id))} className="close">
        X
      </button>
      <button
        onClick={() => dispatch(setIsEditing([true, log._id]))}
        className="btn btn-std"
      >
        Edit
      </button>
    </div>
  );
}

export default LogItem;
