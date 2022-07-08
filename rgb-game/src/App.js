import Display from "./components/Display";
import Nav from "./components/Nav";
import Grid from "./components/Grid";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  let cArr = ["rgbval1", "rgbval2", "rgbval3"];

  return (
    <div className="App">
      <Display />
      <Nav />
      <Grid rgbs={cArr} />
    </div>
  );
}

export default App;
