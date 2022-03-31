import "./App.css";
import data from "./data";
import List from "./components/List";
import Card from "./components/Card";
import { useState, useEffect } from "react";

function App() {
  const [people, setPeople] = useState(data);

  const clearBirthdaysHandler = () => {
    setPeople([]);
  };

  const dismessBirthdayHandler = (id) => {
    const filteredList = people.filter(function (person) {
      return person.id != id;
    });
    setPeople(filteredList);
  };

  return (
    <Card>
      <h1>{people.length} upcoming birthdays</h1>
      <List
        dismessBirthdayHandler={dismessBirthdayHandler}
        clearBirthdaysHandler={clearBirthdaysHandler}
        people={people}
      />
    </Card>
  );
}

export default App;
