import Display from "./components/Display";
import Nav from "./components/nav/Nav";
import Grid from "./components/Grid";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Display />
      <Nav />
      <div className="background">
        <Grid />
      </div>
    </div>
  );
}

export default App;
