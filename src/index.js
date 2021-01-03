import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "bootstrap/dist/css/bootstrap.css";
import reportWebVitals from "./reportWebVitals";
import Weather from "./Weather";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Weather />
      <img
        src="/background.SUN.png"
        width="550"
        alt=""
        className="left-corner-sun"
      />
      <img
        src="/background.SUN.png"
        width="300"
        alt=""
        className="corner-sun"
      />
      <footer>
        <div className="Links">
          This project was coded by{" "}
          <a
            rel="noreferrer"
            href="https://www.linkedin.com/in/ema-korabska-930883160/"
            target="_blank"
          >
            Ema Korabska
          </a>{" "}
          and is {""}
          <a
            rel="noreferrer"
            href="https://github.com/EmskyEm/weather-react"
            target="_blank"
          >
            open-sourced on Github
          </a>
        </div>
      </footer>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
