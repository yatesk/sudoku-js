import React, { useState, useEffect } from "react";

import Grid from "./Grid.js"
import Timer from "./Timer.js"
import "../index.css";

function CheckBoxes({showCandidatesToggle, setShowCandidatesToggle, hiddenSinglesToggle, setHiddenSinglesToggle, nakedSinglesToggle, setNakedSinglesToggle}) {
    return (
        <div>
            <label>
                <input type="checkbox" checked={hiddenSinglesToggle} onChange={() => {setHiddenSinglesToggle(!hiddenSinglesToggle)}} />
                Show Hidden Singles
            </label>
            <label>
                <input type="checkbox" checked={nakedSinglesToggle} onChange={() => {setNakedSinglesToggle(!nakedSinglesToggle)}} />
                Show Naked Singles
            </label>
            <label>
                <input type="checkbox" onChange={() => {setShowCandidatesToggle(!showCandidatesToggle)}} />
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

function Buttons({newGame, pauseGame, solvePuzzle, isGamePaused, resetPuzzle, resetTimer, setResetTimer}) {
    return (
        <div className='blocker'>
            <div>
                <input type="button" id="newGameButton" value="New Game" onClick={newGame}/>
            </div>
            <div>
                <input type="button" id="pauseGameButton" value="Pause Game" onClick={pauseGame}/>
            </div>
            
            <div>
                <Timer isGamePaused={isGamePaused} resetTimer={resetTimer} setResetTimer={setResetTimer}/>
            </div>
            
            <div>
                <input type="button" id="resetPuzzleButton" value="Reset Puzzle" onClick={resetPuzzle}/>
            </div>
            <div>
                <input type="button" id="solvePuzzleButton" value="Solve Puzzle" onClick={solvePuzzle}/>
            </div>
        </div>
    );
}

function Sudoku() {
    const [gameId, setGameId] = useState(1);

    const [resetTimer, setResetTimer] = useState(false);
    
    const [hiddenSinglesToggle, setHiddenSinglesToggle] = useState(false);
    const [nakedSinglesToggle, setNakedSinglesToggle] = useState(false);
    const [showCandidatesToggle, setShowCandidatesToggle] = useState(false);

    const [solvePuzzleToggle, setSolvePuzzleToggle] = useState(false);

    const [isGamePaused, setIsGamePaused] = useState(false);

    const starterGrid2 = [0, 0, 5, 0, 6, 0, 3, 2, 0,
                         0, 0, 0, 3, 0, 0, 0, 0, 4,
                         0, 0, 0, 9, 0, 7, 0, 0, 0,
                         3, 0, 2, 8, 0, 0, 0, 0, 7,
                         0, 0, 7, 0, 0, 0, 4, 0, 5,
                         0, 9, 0, 0, 0, 1, 0, 0, 8,
                         0, 0, 3, 0, 0, 0, 0, 6, 0,
                         0, 0, 0, 0, 7, 0, 0, 0, 0,
                         8, 6, 0, 0, 2, 0, 0, 0, 0];

    const starterGrid = [0, 0, 0, 0, 0, 0, 0, 0, 0,
                        0, 0, 0, 0, 0, 0, 0, 0, 0,
                        0, 0, 0, 0, 0, 0, 0, 0, 0,
                        0, 0, 0, 0, 0, 0, 0, 0, 0,
                        0, 0, 0, 0, 0, 0, 0, 0, 0,
                        0, 0, 0, 0, 0, 0, 0, 0, 0,
                        0, 0, 0, 0, 0, 0, 0, 0, 0,
                        0, 0, 0, 0, 0, 0, 0, 0, 0,
                        0, 0, 0, 0, 0, 0, 0, 0, 0];

    const [grid, setGrid] = useState(starterGrid);
    const [candidates, setCandidates] = useState(Array(81).fill([]));
    
    const [hiddenSingles, setHiddenSingles] = useState(Array(81).fill([]));

    function resetPuzzle() {
        setGrid(starterGrid);
        setCandidates(Array(81).fill([]));
        setHiddenSingles(Array(81).fill([]));
        setResetTimer(true);
    }

    function pauseGame() {
        setIsGamePaused(!isGamePaused);
    }

    // broken
    function newGame() {
        fetch('https://cors-anywhere.herokuapp.com/https://www.nytimes.com/puzzles/sudoku/medium')
            .then(response => {
             //   console.log(response);
                return response.text();
            })
            .then(function (html) {
                console.log(html);
                return html;
            })
            .catch(function (err) {
                // "Not Found"
                console.log(err.statusText);
            });
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

    // refactor?
    function singles(array) {
        for (var index = 0, single = []; index < array.length; index++) {
          if (array.indexOf(array[index], array.indexOf(array[index]) + 1) === -1)
            single.push(array[index]);
        };
        return single;
      };
      
    // refactor?  BUGS
    function findHiddenSingles() {
        // rows singles
        let allTheRowSingles = [];
        for (let row = 0; row < 81; row+=9) {
            let oneRow = [];
            for (let index = row; index < row+9; index++) {
                oneRow = oneRow.concat(candidates[index]);
            }
            allTheRowSingles.push(singles(oneRow));
        }

        // columns singles
        let allTheColumnSingles = [];
        for (let column = 0; column < 9; column++) {
            let oneColumn = [];
            for (let index = column; index < 81; index+=9) {
                oneColumn = oneColumn.concat(candidates[index]);
            }
            allTheColumnSingles.push(singles(oneColumn));
        }

        // subgrid singles
        const subGridStartingIndexes = [0, 3, 6, 27, 30, 33, 54, 57, 60]
        let allTheSubGridCandidates = [];
        for (let subGrid = 0; subGrid < 9; subGrid++) {
            const subGridStartingIndex = subGridStartingIndexes[subGrid];
            let oneSubGrid = []

            for (let column = subGridStartingIndex; column < 3 + subGridStartingIndex; column++) {
                for (let row = 0; row < 20; row+=9) {
                    oneSubGrid = oneSubGrid.concat(candidates[row+column]);
                }
            }
            allTheSubGridCandidates.push(singles(oneSubGrid));
        }

        const tempHiddenSingles = []
        for (let index = 0; index < 81; index++) {
            const tempSingle = []
            for (let candidate = 0; candidate < candidates[index].length; candidate++) {
                const theRow = Math.floor(index/9);
                const theColumn = index%9;
                const theSubGrid = findSubGrid(theColumn, theRow);

                if (allTheRowSingles[theRow].includes(candidates[index][candidate]) ||
                    allTheColumnSingles[theColumn].includes(candidates[index][candidate]) ||
                    allTheSubGridCandidates[theSubGrid].includes(candidates[index][candidate])) {
                        tempSingle.push(candidates[index][candidate]);
                }
            }
            if (tempSingle.length > 0) {
                tempHiddenSingles.push(tempSingle);
            } else {
                tempHiddenSingles.push([]);
            }
            
        }
        setHiddenSingles(tempHiddenSingles);
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
        const tempCandidates = Array(81).fill([]);
        for (let index = 0; index < grid.length; index++) {
            if (grid[index] === 0) {
                const row = Math.floor(index/9);
                const column = index%9;
                const subGrid = findSubGrid(column, row);

                const notPossibleCandidates = rowNumbers[row].concat(columnNumbers[column], subGridNumbers[subGrid]);
                const cellsCandidates = possibleCandidates.filter(i => !notPossibleCandidates.includes(i));

                tempCandidates[index] = cellsCandidates;
            }
            else {
                tempCandidates[index] = [grid[index]];
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

    function solvePuzzleClicked() {
        setSolvePuzzleToggle(true);
      //  findCandidates();
    }

    function isValid(theGrid, index, num) {
        const row = Math.floor(index/9);
        const column = index%9;
        
        // row
        for (let x = row * 9 ; x < (row*9)+9; x++) {
            if (theGrid[x] === num) {
                return false;
            }
        }

        // column
        for (let x = column; x < 81; x+=9) {
            if (theGrid[x] === num) {
                return false;
            }       
        }
        
        // subGrid
       const theSubGrid = findSubGrid(column, row);

      const subGridStartingIndex = Math.floor(theSubGrid / 3) * 27 + ((theSubGrid % 3) * 3);

        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                if (theGrid[subGridStartingIndex + i + (j*9)] === num) {
                    return false;
                }
            }
        }

        return true;
    }

    function solveSuduko(gridCopy, index) {
        // exit condition if entire grid is solved
        if (index === 81) {
            return true;
        }
           
        // checks if cell already has a number in it
        if (grid[index] > 0) {
            return solveSuduko(grid, index + 1);
        }
     
        for (let num = 1; num <= 9; num++) {
            if (isValid(grid, index, num)) {
                  grid[index] = num;

                if (solveSuduko(grid, index + 1)) {
                    setGrid(grid);
                    return true;
                }
            }
            grid[index] = 0;
        }
        return false;
    }

    useEffect(() => {
        if (solvePuzzleToggle === true) {
            let gridCopy = [...grid];

            if (solveSuduko(gridCopy, 0) === true) {
                console.log('puzzle solved');
                setSolvePuzzleToggle(false);
            } else {
                console.log('not solvable');
            }
        }
    }, [solvePuzzleToggle]);


    useEffect(() => {
        if (hiddenSinglesToggle === true) {
            findHiddenSingles();
        }
    }, [candidates]);
    
    useEffect(() => {
        findCandidates();

        if (showCandidatesToggle === false) {
            setHiddenSinglesToggle(false);
            setNakedSinglesToggle(false);
            setCandidates(Array(81).fill([]));
        } 
    }, [hiddenSinglesToggle, nakedSinglesToggle, showCandidatesToggle, grid]);

    return (
        <div>
            <h1>Sudoku</h1>
            <div className="gridDisplay">
                <Grid key={gameId}
                      grid={grid} 
                      setGrid={setGrid} 
                      starterGrid={starterGrid} 
                      candidates={candidates} 
                      updateCandidates={updateCandidates} 
                      nakedSinglesToggle={nakedSinglesToggle} 
                      hiddenSinglesToggle={hiddenSinglesToggle} 
                      hiddenSingles={hiddenSingles}
                      isGamePaused={isGamePaused}/>
                <div>
                    <ComboBoxes />
                    <Buttons newGame={newGame} 
                            pauseGame={pauseGame} 
                            solvePuzzle={solvePuzzleClicked} 
                            isGamePaused={isGamePaused} 
                            resetPuzzle={resetPuzzle} 
                            resetTimer={resetTimer}
                            setResetTimer={setResetTimer}/>
                </div>
                <CheckBoxes showCandidatesToggle={showCandidatesToggle} 
                            setShowCandidatesToggle={setShowCandidatesToggle}
                            hiddenSinglesToggle={hiddenSinglesToggle}
                            setHiddenSinglesToggle={setHiddenSinglesToggle}
                            nakedSinglesToggle={nakedSinglesToggle}
                            setNakedSinglesToggle={setNakedSinglesToggle}
                            />
            </div>
        </div>
    );
}

export default Sudoku;