import { useState } from "react";
import { useDispatch } from "react-redux";
import { createLog } from "../features/logs/logSlice";

function LogForm() {
  const [text, setText] = useState("");

  const dispatch = useDispatch();

  const onSubmit = (e) => {
    e.preventDefault();

    dispatch(createLog({ text }));
    setText("");
  };

  return (
    <section className="form">
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label htmlFor="text">Log</label>
          <input
            type="text"
            name="text"
            id="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </div>
        <div className="form-group">
          <button className="btn btn-block" type="submit">
            Add Log
          </button>
        </div>
      </form>
    </section>
  );
}

export default LogForm;
