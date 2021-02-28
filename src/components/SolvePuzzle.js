import React, { useState, useEffect } from "react";

function SolvePuzzle({grid, setGrid, findSubGrid, isPuzzleSolvable}) {
    const [solvePuzzleToggle, setSolvePuzzleToggle] = useState(false);
    
    function solvePuzzleClicked() {
        setSolvePuzzleToggle(true);
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
            setGrid(gridCopy);
            return true;
        }
           
        // checks if cell already has a number in it
        if (gridCopy[index] > 0) {

            return solveSuduko(gridCopy, index + 1);
        } 
     
        for (let num = 1; num <= 9; num++) {
            if (isValid(gridCopy, index, num)) {
                gridCopy[index] = num;

                if (solveSuduko(gridCopy, index + 1)) {
                    return true;
                }
            }
            gridCopy[index] = 0;
        }
        return false;
    }

    useEffect(() => {
        if (solvePuzzleToggle === true) {
            let gridCopy = [...grid];

            if (solveSuduko(gridCopy, 0) === true) {
                console.log('Puzzle Solved!');
                setSolvePuzzleToggle(false);
            } else {
                console.log('Not Solvable!');
            }
        }
    }, [solvePuzzleToggle]);

    return (
        <input type="button" id="solvePuzzleButton" value="Solve Puzzle" disabled={!isPuzzleSolvable} onClick={solvePuzzleClicked}/>
    );
}

export default SolvePuzzle;