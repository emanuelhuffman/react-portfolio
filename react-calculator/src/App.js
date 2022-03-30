import "./App.css";
import Body from "./components/Body";
import Board from "./components/Board";
import Display from "./components/Display";
import { useState } from "react";

function App() {
  const [content, setContent] = useState("");

  const updateDisplay = (entry) => {
    switch (entry) {
      case "AC":
        setContent("");
        break;
      case "=":
        const result = eval(content);
        setContent(result);
        break;
      default:
        setContent(content + entry);
    }
  };

  return (
    <Body>
      <Display content={content} />
      <Board onDisplayUpdate={updateDisplay} />
    </Body>
  );
}

export default App;
