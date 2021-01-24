import React, { useState } from "react";

import Grid from "./Grid.js"

import "../index.css";

function CheckBoxes() {
    return (
        <div>
            <label>
                <input type="checkbox" />
                Highlight Hidden Singles
            </label>
            <label>
                <input type="checkbox" />
                Highlight Naked Singles
            </label>
            <label>
                <input type="checkbox" />
                Show Candidates
            </label>
            
        </div>
    );
}

function ComboBoxes() {
    return (
        <div>
            <label for="puzzleSource">Puzzle Source:</label>
            <select id="puzzleSource" name="puzzleSource">
                <option value="nyTimes">NY Times</option>
                <option value="qqWing">QQ Wing</option>
                <option value="random">Random</option>
                <option value="other">Other</option>
            </select>

            <label for="puzzleDifficulty">Puzzle Difficulty:</label>
            <select id="puzzleDifficulty" name="puzzleDifficulty">
                <option value="easy">Easy</option>
                <option value="medium">Medium</option>
                <option value="hard">Hard</option>
            </select>
        </div>
    );
}

function Buttons() {
    return (
        <div>
            <input type="button" id="newGame" value="New Game"/>
            <input type="button" id="pauseGame" value="Pause Game"/>

            <label>00:00:01</label>

            <input type="button" id="resetPuzzle" value="Reset Puzzle"/>
            <input type="button" id="solvePuzzle" value="Solve Puzzle"/>
        </div>
    );
}


function Sudoku() {
    const [gameId, setGameId] = useState(1);

    return (
        <div>
            <h1>Sudoku</h1>
            <Grid key={gameId} resetGame={() => setGameId(gameId + 1)}/>

            <ComboBoxes />

            <Buttons />

            <CheckBoxes />
        </div>
            
    );
}

export default Sudoku;