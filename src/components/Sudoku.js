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
        <div className='gridDisplay'>
            <label htmlFor="puzzleSource">Puzzle Source:</label>
            <select id="puzzleSource" name="puzzleSource">
                <option value="nyTimes">NY Times</option>
                <option value="qqWing">QQ Wing</option>
                <option value="random">Random</option>
                <option value="other">Other</option>
            </select>
        
            <label htmlFor="puzzleDifficulty">Puzzle Difficulty:</label>
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
        <div className='blocker'>
            <div>
                <input type="button" id="newGame" value="New Game"/>
            </div>
            <div>
                <input type="button" id="pauseGame" value="Pause Game"/>
            </div>
            
            <div>
                <label>00:00:01</label>
            </div>
            
            <div>
                <input type="button" id="resetPuzzle" value="Reset Puzzle"/>
            </div>
            <div>
                <input type="button" id="solvePuzzle" value="Solve Puzzle"/>
            </div>
        </div>
    );
}


function Sudoku() {
    const [gameId, setGameId] = useState(1);

    const testPuzzle = [0, 0, 1, 0, 0, 0, 0, 2, 6,
                        7, 2, 0, 6, 9, 0, 4, 1, 0,
                        0, 0, 0, 0, 4, 0, 0, 0, 0,
                        4, 0, 0, 7, 5, 0, 2, 0, 0,
                        0, 8, 7, 9, 0, 0, 0, 0, 0,
                        0, 0, 0, 0, 0, 0, 0, 0, 0,
                        0, 6, 0, 4, 0, 0, 0, 0, 0,
                        9, 0, 2, 0, 6, 0, 1, 0, 0,
                        0, 0, 0, 0, 0, 3, 0, 7, 0];

    const [puzzle, setPuzzle] = useState(testPuzzle);

    return (
        <div>
            <h1>Sudoku</h1>
            <div className="gridDisplay">
                <Grid key={gameId} resetGame={() => setGameId(gameId + 1)} puzzle={puzzle} setPuzzle={setPuzzle}/>
                <div>
                    <ComboBoxes />
                    <Buttons />
                </div>
                <CheckBoxes />
            </div>
        </div>
    );
}

export default Sudoku;