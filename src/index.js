import React from "react";
import ReactDOM from "react-dom";

import Sudoku from "./components/Sudoku.js"

import "./index.css";

var destination = document.getElementById("container");

function App() {
    return (
      <Sudoku/>
    );
}

ReactDOM.render(
    <App />,
    destination
); 