import { useDispatch } from "react-redux";
import { deleteLog } from "../features/logs/logSlice";

function LogItem({ log }) {
  const dispatch = useDispatch();

  return (
    <div className="log">
      <div>{new Date(log.createdAt).toLocaleString("en-US")}</div>
      <h2>{log.text}</h2>
      <button onClick={() => dispatch(deleteLog(log._id))} className="close">
        X
      </button>
    </div>
  );
}

export default LogItem;
