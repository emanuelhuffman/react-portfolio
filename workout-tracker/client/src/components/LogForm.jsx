import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createLog, updateLog, setIsEditing } from "../features/logs/logSlice";
import todayDate from "../utils/dateFormat";

function LogForm() {
  const initialExercise = {
    name: "",
    weight: 0,
    sets: 0,
    reps: 0,
  };
  const [date, setDate] = useState(todayDate());
  const [exercise, setExercise] = useState(initialExercise);
  const [exercises, setExercises] = useState([]);

  const { name, weight, sets, reps } = exercise;
  const { isEditing, curLogId } = useSelector((state) => state.logs);

  const dispatch = useDispatch();

  const onSubmit = (e) => {
    e.preventDefault();

    if (isEditing) {
      dispatch(updateLog([curLogId, { date, exercises }]));
    } else {
      dispatch(createLog({ date, exercises }));
    }

    setExercise(initialExercise);
    setExercises([]);
  };

  const onChange = (e) => {
    setExercise((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const addExercise = (e) => {
    setExercises((prevState) => [
      ...prevState,
      { name: name, weight: weight, sets: sets, reps: reps },
    ]);
    setExercise(initialExercise);
  };

  const removeExercise = (index) => {
    setExercises((prevState) => prevState.filter((ex, i) => i !== index));
  };

  return (
    <section className="form">
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label htmlFor="date">Date</label>
          <input
            type="date"
            name="date"
            id="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>
        <div className="exercise-section">
          <div className="form-group exercise-name">
            <input
              type="text"
              name="name"
              id="name"
              value={name}
              placeholder="Exercise Name"
              onChange={onChange}
            />
          </div>
          <div className="form-group form-row">
            <div>
              <label>Weight</label>
              <input
                type="number"
                name="weight"
                id="weight"
                value={weight}
                placeholder="Exercise weight"
                onChange={onChange}
              />
            </div>
            <div>
              <label>Sets</label>
              <input
                type="number"
                name="sets"
                id="sets"
                value={sets}
                placeholder="Exercise sets"
                onChange={onChange}
              />
            </div>
            <div>
              <label>Reps</label>
              <input
                type="number"
                name="reps"
                id="reps"
                value={reps}
                placeholder="Exercise reps"
                onChange={onChange}
              />
            </div>
          </div>
          <button className="btn btn-add" type="button" onClick={addExercise}>
            Add Exercise
          </button>
          <div className="exercise-list">
            {exercises.map((ex, index) => (
              <div key={index} onClick={() => removeExercise(index)}>
                {ex.name} - {ex.weight}lbs - {ex.sets} sets - {ex.reps} reps
              </div>
            ))}
          </div>
        </div>

        <div className="form-group">
          {isEditing ? (
            <div className="edit-btns">
              <button
                className="btn btn-block"
                type="button"
                onClick={() => dispatch(setIsEditing(false))}
              >
                Cancel
              </button>
              <div></div>
              <button className="btn btn-block" type="submit">
                Update Log
              </button>
            </div>
          ) : (
            <button className="btn btn-block" type="submit">
              Add Log
            </button>
          )}
        </div>
      </form>
    </section>
  );
}

export default LogForm;
