import React, { useState } from "react";
import ReactDOM from "react-dom";

import Sudoku from "./components/Sudoku.js"

import "./index.css";

var destination = document.getElementById("container");

function App() {
    const [gameId, setGameId] = useState(1);

    return (
        <div>
            <Sudoku/>
        </div>
    );
}

ReactDOM.render(
    <App />,
    destination
); 