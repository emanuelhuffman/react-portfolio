import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import LogForm from "../components/LogForm";
import LogItem from "../components/LogItem";
import Spinner from "../components/Spinner";
import { getLogs, reset } from "../features/logs/logSlice";
import EditModal from "../components/EditModal";

function Dashboard() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.auth);
  const { logs, isLoading, isError, message, isEditing } = useSelector(
    (state) => state.logs
  );

  useEffect(() => {
    if (isError) {
      console.log(message);
    }

    if (!user) {
      navigate("/login");
    }

    dispatch(getLogs());

    return () => {
      dispatch(reset());
    };
  }, [user, navigate, dispatch]);

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <>
      <LogForm />
      <section className="content">
        {logs.length > 0 ? (
          <div className="logs">
            {logs.map((log) => (
              <LogItem key={log._id} log={log} />
            ))}
          </div>
        ) : (
          <h3>You have not set any logs</h3>
        )}
      </section>
      {isEditing && <EditModal />}
    </>
  );
}

export default Dashboard;
