import React, { useState, useEffect } from "react";

import Grid from "./Grid.js"
import "../index.css";

function CheckBoxes({showCandidates, setShowCandidates, highlightHiddenSingles, setHighlightHiddenSingles, nakedSinglesToggle, setNakedSinglesToggle}) {
    return (
        <div>
            <label>
                <input type="checkbox"  onChange={() => {setHighlightHiddenSingles(!highlightHiddenSingles)}} />
                Highlight Hidden Singles
            </label>
            <label>
                <input type="checkbox" onChange={() => {setNakedSinglesToggle(!nakedSinglesToggle)}} />
                Highlight Naked Singles
            </label>
            <label>
                <input type="checkbox" onChange={() => {setShowCandidates(!showCandidates)}} />
                Show Candidates
            </label>
        </div>
    );
}

function ComboBoxes() {
    return (
        <div className='gridDisplay select'>
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

function Buttons({resetPuzzle}) {

    return (
        <div className='blocker'>
            <div>
                <input type="button" id="newGameButton" value="New Game"/>
            </div>
            <div>
                <input type="button" id="pauseGameButton" value="Pause Game"/>
            </div>
            
            <div>
                <label>00:00:01</label>
            </div>
            
            <div>
                <input type="button" id="resetPuzzleButton" value="Reset Puzzle" onClick={resetPuzzle}/>
            </div>
            <div>
                <input type="button" id="solvePuzzleButton" value="Solve Puzzle"/>
            </div>
        </div>
    );
}

function Sudoku() {
    const [gameId, setGameId] = useState(1);
    
    const [highlightHiddenSingles, setHighlightHiddenSingles] = useState(false);
    const [nakedSinglesToggle, setNakedSinglesToggle] = useState(false);
    const [showCandidates, setShowCandidates] = useState(false);

    const starterGrid = [0, 5, 7, 6, 4, 0, 0, 9, 0,
                        3, 9, 8, 7, 0, 0, 0, 0, 0,
                        0, 0, 0, 8, 0, 0, 5, 0, 2,
                        8, 0, 4, 0, 7, 6, 0, 0, 0,
                        0, 6, 0, 0, 2, 5, 7, 0, 0,
                        7, 2, 0, 0, 0, 0, 6, 3, 0,
                        0, 7, 0, 5, 0, 3, 0, 6, 8,
                        0, 0, 3, 4, 6, 0, 0, 0, 1,
                        6, 0, 1, 0, 0, 8, 3, 5, 0];

    const [grid, setGrid] = useState(starterGrid);
    const [candidates, setCandidates] = useState(Array(81).fill([]));


    function resetPuzzle() {
        console.log('resetPuzzle');
        setGrid(starterGrid);
        setCandidates(Array(81).fill([]));
    }

    function updateCandidates(cell, candidate) {
        const tempCandidates = [...candidates];

        var index = tempCandidates[cell].indexOf(candidate);
        if (index === -1) {
            tempCandidates[cell] = [...tempCandidates[cell], candidate];
        } else {
            tempCandidates[cell].splice(index, 1);
        }

        setCandidates(tempCandidates);
    }

    function findCandidates() {
        // Find all numbers in each row
        let rowNumbers = [];
        for (let row = 0; row < 81; row+=9) {
            let oneRow = [];
            for (let column = 0; column < 9; column++) {
                if (grid[row+column] > 0) {
                    oneRow.push(grid[row+column]);
                }
            }
            rowNumbers.push(oneRow);
        }
        
        // Find all numbers in each column
        let columnNumbers = [];
        for (let column = 0; column < 9; column++) {
            let oneColumn = [];
            for (let row = 0; row < 81; row+=9) {
                if (grid[row+column] > 0) {
                    oneColumn.push(grid[row+column]);
                }
            }
            columnNumbers.push(oneColumn);
        }

        // Find all numbers in each subgrid
        const subGridStartingIndexes = [0, 3, 6, 27, 30, 33, 54, 57, 60]
        let subGridNumbers = [];
        for (let subGrid = 0; subGrid < 9; subGrid++) {
            const subGridStartingIndex = subGridStartingIndexes[subGrid];
            let oneSubGrid = []

            for (let column = subGridStartingIndex; column < 3 + subGridStartingIndex; column++) {
                for (let row = 0; row < 20; row+=9) {
                    if (grid[row+column] > 0) {
                        oneSubGrid.push(grid[row+column]);
                    }
                }
            }
            subGridNumbers.push(oneSubGrid);
        }

        const possibleCandidates = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        const tempCandidates = [...candidates];
        for (let index = 0; index < grid.length; index++) {
            if (grid[index] === 0) {
                const row = Math.floor(index/9);
                const column = index%9;
                const subGrid = findSubGrid(column, row);

                const notPossibleCandidates = rowNumbers[row].concat(columnNumbers[column], subGridNumbers[subGrid]);
                
                const cellsCandidates = possibleCandidates.filter(i => !notPossibleCandidates.includes(i));

                tempCandidates[index] = cellsCandidates;
            }
        }

        setCandidates(tempCandidates);
    }

    // refactor?
    function findSubGrid(column, row) {
        
        if (row < 3) {
            if (column < 3) {
                return 0;
            }
            else if (column < 6) {
                return 1;
            }
            else if (column < 9) {
                return 2;
            }
        } 
        else if ( row < 6) {
            if (column < 3) {
                return 3;
            }
            else if (column < 6) {
                return 4;
            }
            else if (column < 9) {
                return 5;
            }    
        }
        else if ( row < 9) {
            if (column < 3) {
                return 6;
            }
            else if (column < 6) {
                return 7;
            }
            else if (column < 9) {
                return 8;
            }    
        }
    }

    useEffect(() => {
        if (showCandidates === true) {
            findCandidates();
        } else {
            setCandidates(Array(81).fill([]));
        }

    }, [showCandidates, grid]);

    return (
        <div>
            <h1>Sudoku</h1>
            <div className="gridDisplay">
                <Grid key={gameId}
                      grid={grid} setGrid={setGrid} starterGrid={starterGrid} candidates={candidates} updateCandidates={updateCandidates} nakedSinglesToggle={nakedSinglesToggle}/>
                <div>
                    <ComboBoxes />
                    <Buttons resetPuzzle={resetPuzzle}/>
                </div>
                <CheckBoxes showCandidates={showCandidates} 
                            setShowCandidates={setShowCandidates}
                            highlightHiddenSingles={highlightHiddenSingles}
                            setHighlightHiddenSingles={setHighlightHiddenSingles}
                            nakedSinglesToggle={nakedSinglesToggle}
                            setNakedSinglesToggle={setNakedSinglesToggle}
                            />
            </div>
        </div>
    );
}

export default Sudoku;