import React, { useState } from "react";
import ReactDOM from "react-dom";

import "./index.css";

var destination = document.getElementById("container");

function App() {
    const [gameId, setGameId] = useState(1);

    return (
        <div>
            <h1>Sudoku</h1>
            {/* <TicTacToe key={gameId} resetGame={() => setGameId(gameId + 1)}/> */}
        </div>
    );
}

ReactDOM.render(
    <App />,
    destination
); 