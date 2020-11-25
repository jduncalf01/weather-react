import React from "react";
import ReactDOM from "react-dom";
import Weather from "./App";

import "./index.css";

function App() {
  return (
    <div className="App">
      <Weather />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);