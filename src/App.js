import logo from "./logo.svg";
import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1> Hello Emsky</h1>
        <Weather city="Barcelona" />
      </header>
    </div>
  );
}

export default App;
