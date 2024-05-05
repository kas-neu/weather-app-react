import React from "react";
import Weather from "./Weather";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="London" />
        <footer>
          <p>
            {" "}
            This project was created by{" "}
            <a
              href="https://github.com/kas-neu"
              target="_blank"
              rel="noreferrer"
            >
              Kasia Neugebauer
            </a>{" "}
            and is open-sourced on{" "}
            <a
              href="https://github.com/kas-neu/weather-app-react"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>
            .
          </p>
        </footer>
      </div>
    </div>
  );
};

export default App;
