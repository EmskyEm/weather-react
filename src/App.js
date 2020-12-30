import React from "react";
import Weather from "./Weather";
import "./App.css";
import "./Weather.css";

export default function Links() {
  return (
    <div className="Links">
      <div className="container">
        <Weather />

        <footer>
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
        </footer>
      </div>
    </div>
  );
}