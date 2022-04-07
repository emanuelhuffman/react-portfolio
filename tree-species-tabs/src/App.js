import "./App.css";
import trees from "./data";
import { useState } from "react";

function App() {
  const [tab, setTab] = useState(0);

  const changeTab = (tabNum) => {
    setTab(tabNum);
  };

  const { id, name, img, description, fact } = trees[tab];
  return (
    <div className="card">
      <div className="tabs">
        {trees.map((tree, index) => {
          const btnClasses = "tabBtns".concat(
            tab === index ? " activeBtn" : ""
          );
          return (
            <button
              className={btnClasses}
              key={tree.id}
              onClick={() => changeTab(index)}
            >
              {tree.name}
            </button>
          );
        })}
      </div>
      <div className="content">
        <h3>{name}</h3>
        <img src={img} />
        <p className="description">{description}</p>
        <p className="fact">
          <b>Fun Fact: </b>
          {fact}
        </p>
      </div>
    </div>
  );
}

export default App;
