import React, { useState, useEffect } from "react";

import Cell from "./Cell.js"
import "../index.css";

function Grid({grid, setGrid, starterGrid, candidates, updateCandidates, nakedSinglesToggle}) {
    const [invalidCellNumbers, setInvalidCellNumbers] = useState([Array(81).fill(false)]);

    function updateGrid(gridID, value) {
        const newGrid = [...grid];
        newGrid[gridID] = value;

        setGrid(newGrid);
    }

    function updateInvalidCellNumbers(invalidCells) {
        const newInvalidCells = Array(81).fill(false);

        for (let index = 0; index < invalidCells.length; index++) {
            newInvalidCells[invalidCells[index]] = true;
            
        }
        setInvalidCellNumbers(newInvalidCells);
    }

    function checkForWinningGrid(invalidCells) {
        let cellNumbers = 0;

        for (let index = 0; index < grid.length; index++) {
            if (grid[index] !== 0) {
                cellNumbers += 1;
            }
        }

        if (cellNumbers === 81 && invalidCells.length === 0) {
            return true;
        } else {
            return false;
        }
    }

    function findAnyInvalidCellNumbers() {
        const invalidCells = [];

        // Horizontal check
        for (let row = 0; row < 81; row+=9) {
            var count = {};
            for (let index = 0+row; index < 9+row; index++) {
                var number = grid[index];
                if (number > 0) {
                    if (number in count) {
                        invalidCells.push(count[number]);
                        invalidCells.push(index);
                    } else {
                        count[number] = index;
                    }
                }
            }
        }

        // Vertical check
        for (let column = 0; column < 9; column++) {
            count = {};
            for (let index = 0+column; index < 81+column; index+=9) {
                number = grid[index];
                if (number > 0) {
                    if (number in count) {
                        invalidCells.push(count[number]);
                        invalidCells.push(index);
                    } else {
                        count[number] = index;
                    }
                }
            }
        }

        // Subgrid check
        const subGridStartingIndexes = [0, 3, 6, 27, 30, 33, 54, 57, 60]

        for (let subGrid = 0; subGrid < 9; subGrid++) {
            count = {};
            const subGridStartingIndex = subGridStartingIndexes[subGrid];

            for (let column = subGridStartingIndex; column < 3 + subGridStartingIndex; column++) {
                for (let row = 0; row < 20; row+=9) {
                    number = grid[column+row];
                    if (number > 0) {
                        if (number in count) {
                            invalidCells.push(count[number]);
                            invalidCells.push(column+row);
                        } else {
                            count[number] = column+row;
                        }
                    }
                }
            }
        }
            
        return invalidCells;
    }

    useEffect(() => {
        const invalidCells = findAnyInvalidCellNumbers();

        updateInvalidCellNumbers(invalidCells);

        if (checkForWinningGrid(invalidCells)) {
            console.log('winner');
        }
    }, [grid]);

    return (
        <div className='gameBoardGrid'>                                                                                          
            { grid.map((item, index) => 
                <Cell gridID={index} 
                      value={item} 
                      updateGrid={updateGrid} 
                      revealedCell={starterGrid[index] !== 0} 
                      invalidCellNumber={invalidCellNumbers[index]} 
                      candidates={candidates[index]} 
                      updateCandidates={updateCandidates} 
                      nakedSinglesToggle={nakedSinglesToggle} /> )}
        </div> 
    );
}

export default Grid;