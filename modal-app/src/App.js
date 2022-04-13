import { useState } from "react";
import Modal from "./components/Modal";
import Home from "./components/Home";

function App() {
  const [modal, setModal] = useState(false);

  return (
    <div className="container">
      <Home setModal={setModal} />
      {modal && <Modal setModal={setModal} />}
    </div>
  );
}

export default App;
