import React, { useState, useEffect } from "react";

import Cell from "./Cell.js"
import "../index.css";

function Grid({resetGame, grid, setGrid, starterGrid, candidates, updateCandidates}) {
    const [invalidCellNumbers, setInvalidCellNumbers] = useState([Array(81).fill(false)]);

    function onClick(e) {
        // console.log('board clicked');
    }

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
        <div className='gameBoardGrid' onClick={onClick}>                                                                                          
            <Cell gridID={0} value={grid[0]} updateGrid={updateGrid} revealedCell={starterGrid[0] !== 0} invalidCellNumber={invalidCellNumbers[0]} candidates={candidates[0]} updateCandidates={updateCandidates}/>
            <Cell gridID={1} value={grid[1]} updateGrid={updateGrid} revealedCell={starterGrid[1] !== 0} invalidCellNumber={invalidCellNumbers[1]} candidates={candidates[1]} updateCandidates={updateCandidates}/>
            <Cell gridID={2} value={grid[2]} updateGrid={updateGrid} revealedCell={starterGrid[2] !== 0} invalidCellNumber={invalidCellNumbers[2]} candidates={candidates[2]} updateCandidates={updateCandidates}/>
            <Cell gridID={3} value={grid[3]} updateGrid={updateGrid} revealedCell={starterGrid[3] !== 0} invalidCellNumber={invalidCellNumbers[3]} candidates={candidates[3]} updateCandidates={updateCandidates}/>
            <Cell gridID={4} value={grid[4]} updateGrid={updateGrid} revealedCell={starterGrid[4] !== 0} invalidCellNumber={invalidCellNumbers[4]} candidates={candidates[4]} updateCandidates={updateCandidates}/>
            <Cell gridID={5} value={grid[5]} updateGrid={updateGrid} revealedCell={starterGrid[5] !== 0} invalidCellNumber={invalidCellNumbers[5]} candidates={candidates[5]} updateCandidates={updateCandidates}/>
            <Cell gridID={6} value={grid[6]} updateGrid={updateGrid} revealedCell={starterGrid[6] !== 0} invalidCellNumber={invalidCellNumbers[6]} candidates={candidates[6]} updateCandidates={updateCandidates}/>
            <Cell gridID={7} value={grid[7]} updateGrid={updateGrid} revealedCell={starterGrid[7] !== 0} invalidCellNumber={invalidCellNumbers[7]} candidates={candidates[7]} updateCandidates={updateCandidates}/>
            <Cell gridID={8} value={grid[8]} updateGrid={updateGrid} revealedCell={starterGrid[8] !== 0} invalidCellNumber={invalidCellNumbers[8]} candidates={candidates[8]} updateCandidates={updateCandidates}/>

            <Cell gridID={9} value={grid[9]} updateGrid={updateGrid} revealedCell={starterGrid[9] !== 0} invalidCellNumber={invalidCellNumbers[9]} candidates={candidates[9]} updateCandidates={updateCandidates}/>
            <Cell gridID={10} value={grid[10]} updateGrid={updateGrid} revealedCell={starterGrid[10] !== 0} invalidCellNumber={invalidCellNumbers[10]} candidates={candidates[10]} updateCandidates={updateCandidates}/>
            <Cell gridID={11} value={grid[11]} updateGrid={updateGrid} revealedCell={starterGrid[11] !== 0} invalidCellNumber={invalidCellNumbers[11]} candidates={candidates[11]} updateCandidates={updateCandidates}/>
            <Cell gridID={12} value={grid[12]} updateGrid={updateGrid} revealedCell={starterGrid[12] !== 0} invalidCellNumber={invalidCellNumbers[12]} candidates={candidates[12]} updateCandidates={updateCandidates}/>
            <Cell gridID={13} value={grid[13]} updateGrid={updateGrid} revealedCell={starterGrid[13] !== 0} invalidCellNumber={invalidCellNumbers[13]} candidates={candidates[13]} updateCandidates={updateCandidates}/>
            <Cell gridID={14} value={grid[14]} updateGrid={updateGrid} revealedCell={starterGrid[14] !== 0} invalidCellNumber={invalidCellNumbers[14]} candidates={candidates[14]} updateCandidates={updateCandidates}/>
            <Cell gridID={15} value={grid[15]} updateGrid={updateGrid} revealedCell={starterGrid[15] !== 0} invalidCellNumber={invalidCellNumbers[15]} candidates={candidates[15]} updateCandidates={updateCandidates}/>
            <Cell gridID={16} value={grid[16]} updateGrid={updateGrid} revealedCell={starterGrid[16] !== 0} invalidCellNumber={invalidCellNumbers[16]} candidates={candidates[16]} updateCandidates={updateCandidates}/>
            <Cell gridID={17} value={grid[17]} updateGrid={updateGrid} revealedCell={starterGrid[17] !== 0} invalidCellNumber={invalidCellNumbers[17]} candidates={candidates[17]} updateCandidates={updateCandidates}/>

            <Cell gridID={18} value={grid[18]} updateGrid={updateGrid} revealedCell={starterGrid[18] !== 0} invalidCellNumber={invalidCellNumbers[18]} candidates={candidates[18]} updateCandidates={updateCandidates}/>
            <Cell gridID={19} value={grid[19]} updateGrid={updateGrid} revealedCell={starterGrid[19] !== 0} invalidCellNumber={invalidCellNumbers[19]} candidates={candidates[19]} updateCandidates={updateCandidates}/>
            <Cell gridID={20} value={grid[20]} updateGrid={updateGrid} revealedCell={starterGrid[20] !== 0} invalidCellNumber={invalidCellNumbers[20]} candidates={candidates[20]} updateCandidates={updateCandidates}/>
            <Cell gridID={21} value={grid[21]} updateGrid={updateGrid} revealedCell={starterGrid[21] !== 0} invalidCellNumber={invalidCellNumbers[21]} candidates={candidates[21]} updateCandidates={updateCandidates}/>
            <Cell gridID={22} value={grid[22]} updateGrid={updateGrid} revealedCell={starterGrid[22] !== 0} invalidCellNumber={invalidCellNumbers[22]} candidates={candidates[22]} updateCandidates={updateCandidates}/>
            <Cell gridID={23} value={grid[23]} updateGrid={updateGrid} revealedCell={starterGrid[23] !== 0} invalidCellNumber={invalidCellNumbers[23]} candidates={candidates[23]} updateCandidates={updateCandidates}/>
            <Cell gridID={24} value={grid[24]} updateGrid={updateGrid} revealedCell={starterGrid[24] !== 0} invalidCellNumber={invalidCellNumbers[24]} candidates={candidates[24]} updateCandidates={updateCandidates}/>
            <Cell gridID={25} value={grid[25]} updateGrid={updateGrid} revealedCell={starterGrid[25] !== 0} invalidCellNumber={invalidCellNumbers[25]} candidates={candidates[25]} updateCandidates={updateCandidates}/>
            <Cell gridID={26} value={grid[26]} updateGrid={updateGrid} revealedCell={starterGrid[26] !== 0} invalidCellNumber={invalidCellNumbers[26]} candidates={candidates[26]} updateCandidates={updateCandidates}/>

            <Cell gridID={27} value={grid[27]} updateGrid={updateGrid} revealedCell={starterGrid[27] !== 0} invalidCellNumber={invalidCellNumbers[27]} candidates={candidates[27]} updateCandidates={updateCandidates}/>
            <Cell gridID={28} value={grid[28]} updateGrid={updateGrid} revealedCell={starterGrid[28] !== 0} invalidCellNumber={invalidCellNumbers[28]} candidates={candidates[28]} updateCandidates={updateCandidates}/>
            <Cell gridID={29} value={grid[29]} updateGrid={updateGrid} revealedCell={starterGrid[29] !== 0} invalidCellNumber={invalidCellNumbers[29]} candidates={candidates[29]} updateCandidates={updateCandidates}/>
            <Cell gridID={30} value={grid[30]} updateGrid={updateGrid} revealedCell={starterGrid[30] !== 0} invalidCellNumber={invalidCellNumbers[30]} candidates={candidates[30]} updateCandidates={updateCandidates}/>
            <Cell gridID={31} value={grid[31]} updateGrid={updateGrid} revealedCell={starterGrid[31] !== 0} invalidCellNumber={invalidCellNumbers[31]} candidates={candidates[31]} updateCandidates={updateCandidates}/>
            <Cell gridID={32} value={grid[32]} updateGrid={updateGrid} revealedCell={starterGrid[32] !== 0} invalidCellNumber={invalidCellNumbers[32]} candidates={candidates[32]} updateCandidates={updateCandidates}/>
            <Cell gridID={33} value={grid[33]} updateGrid={updateGrid} revealedCell={starterGrid[33] !== 0} invalidCellNumber={invalidCellNumbers[33]} candidates={candidates[33]} updateCandidates={updateCandidates}/>
            <Cell gridID={34} value={grid[34]} updateGrid={updateGrid} revealedCell={starterGrid[34] !== 0} invalidCellNumber={invalidCellNumbers[34]} candidates={candidates[34]} updateCandidates={updateCandidates}/>
            <Cell gridID={35} value={grid[35]} updateGrid={updateGrid} revealedCell={starterGrid[35] !== 0} invalidCellNumber={invalidCellNumbers[35]} candidates={candidates[35]} updateCandidates={updateCandidates}/>

            <Cell gridID={36} value={grid[36]} updateGrid={updateGrid} revealedCell={starterGrid[36] !== 0} invalidCellNumber={invalidCellNumbers[36]} candidates={candidates[36]} updateCandidates={updateCandidates}/>
            <Cell gridID={37} value={grid[37]} updateGrid={updateGrid} revealedCell={starterGrid[37] !== 0} invalidCellNumber={invalidCellNumbers[37]} candidates={candidates[37]} updateCandidates={updateCandidates}/>
            <Cell gridID={38} value={grid[38]} updateGrid={updateGrid} revealedCell={starterGrid[38] !== 0} invalidCellNumber={invalidCellNumbers[38]} candidates={candidates[38]} updateCandidates={updateCandidates}/>
            <Cell gridID={39} value={grid[39]} updateGrid={updateGrid} revealedCell={starterGrid[39] !== 0} invalidCellNumber={invalidCellNumbers[39]} candidates={candidates[39]} updateCandidates={updateCandidates}/>
            <Cell gridID={40} value={grid[40]} updateGrid={updateGrid} revealedCell={starterGrid[40] !== 0} invalidCellNumber={invalidCellNumbers[40]} candidates={candidates[40]} updateCandidates={updateCandidates}/>
            <Cell gridID={41} value={grid[41]} updateGrid={updateGrid} revealedCell={starterGrid[41] !== 0} invalidCellNumber={invalidCellNumbers[41]} candidates={candidates[41]} updateCandidates={updateCandidates}/>
            <Cell gridID={42} value={grid[42]} updateGrid={updateGrid} revealedCell={starterGrid[42] !== 0} invalidCellNumber={invalidCellNumbers[42]} candidates={candidates[42]} updateCandidates={updateCandidates}/>
            <Cell gridID={43} value={grid[43]} updateGrid={updateGrid} revealedCell={starterGrid[43] !== 0} invalidCellNumber={invalidCellNumbers[43]} candidates={candidates[43]} updateCandidates={updateCandidates}/>
            <Cell gridID={44} value={grid[44]} updateGrid={updateGrid} revealedCell={starterGrid[44] !== 0} invalidCellNumber={invalidCellNumbers[44]} candidates={candidates[44]} updateCandidates={updateCandidates}/>

            <Cell gridID={45} value={grid[45]} updateGrid={updateGrid} revealedCell={starterGrid[45] !== 0} invalidCellNumber={invalidCellNumbers[45]} candidates={candidates[45]} updateCandidates={updateCandidates}/>
            <Cell gridID={46} value={grid[46]} updateGrid={updateGrid} revealedCell={starterGrid[46] !== 0} invalidCellNumber={invalidCellNumbers[46]} candidates={candidates[46]} updateCandidates={updateCandidates}/>
            <Cell gridID={47} value={grid[47]} updateGrid={updateGrid} revealedCell={starterGrid[47] !== 0} invalidCellNumber={invalidCellNumbers[47]} candidates={candidates[47]} updateCandidates={updateCandidates}/>
            <Cell gridID={48} value={grid[48]} updateGrid={updateGrid} revealedCell={starterGrid[48] !== 0} invalidCellNumber={invalidCellNumbers[48]} candidates={candidates[48]} updateCandidates={updateCandidates}/>
            <Cell gridID={49} value={grid[49]} updateGrid={updateGrid} revealedCell={starterGrid[49] !== 0} invalidCellNumber={invalidCellNumbers[49]} candidates={candidates[49]} updateCandidates={updateCandidates}/>
            <Cell gridID={50} value={grid[50]} updateGrid={updateGrid} revealedCell={starterGrid[50] !== 0} invalidCellNumber={invalidCellNumbers[50]} candidates={candidates[50]} updateCandidates={updateCandidates}/>
            <Cell gridID={51} value={grid[51]} updateGrid={updateGrid} revealedCell={starterGrid[51] !== 0} invalidCellNumber={invalidCellNumbers[51]} candidates={candidates[51]} updateCandidates={updateCandidates}/>
            <Cell gridID={52} value={grid[52]} updateGrid={updateGrid} revealedCell={starterGrid[52] !== 0} invalidCellNumber={invalidCellNumbers[52]} candidates={candidates[52]} updateCandidates={updateCandidates}/>
            <Cell gridID={53} value={grid[53]} updateGrid={updateGrid} revealedCell={starterGrid[53] !== 0} invalidCellNumber={invalidCellNumbers[53]} candidates={candidates[53]} updateCandidates={updateCandidates}/>

            <Cell gridID={54} value={grid[54]} updateGrid={updateGrid} revealedCell={starterGrid[54] !== 0} invalidCellNumber={invalidCellNumbers[54]} candidates={candidates[54]} updateCandidates={updateCandidates}/>
            <Cell gridID={55} value={grid[55]} updateGrid={updateGrid} revealedCell={starterGrid[55] !== 0} invalidCellNumber={invalidCellNumbers[55]} candidates={candidates[55]} updateCandidates={updateCandidates}/>
            <Cell gridID={56} value={grid[56]} updateGrid={updateGrid} revealedCell={starterGrid[56] !== 0} invalidCellNumber={invalidCellNumbers[56]} candidates={candidates[56]} updateCandidates={updateCandidates}/>
            <Cell gridID={57} value={grid[57]} updateGrid={updateGrid} revealedCell={starterGrid[57] !== 0} invalidCellNumber={invalidCellNumbers[57]} candidates={candidates[57]} updateCandidates={updateCandidates}/>
            <Cell gridID={58} value={grid[58]} updateGrid={updateGrid} revealedCell={starterGrid[58] !== 0} invalidCellNumber={invalidCellNumbers[58]} candidates={candidates[58]} updateCandidates={updateCandidates}/>
            <Cell gridID={59} value={grid[59]} updateGrid={updateGrid} revealedCell={starterGrid[59] !== 0} invalidCellNumber={invalidCellNumbers[59]} candidates={candidates[59]} updateCandidates={updateCandidates}/>
            <Cell gridID={60} value={grid[60]} updateGrid={updateGrid} revealedCell={starterGrid[60] !== 0} invalidCellNumber={invalidCellNumbers[60]} candidates={candidates[60]} updateCandidates={updateCandidates}/>
            <Cell gridID={61} value={grid[61]} updateGrid={updateGrid} revealedCell={starterGrid[61] !== 0} invalidCellNumber={invalidCellNumbers[61]} candidates={candidates[61]} updateCandidates={updateCandidates}/>
            <Cell gridID={62} value={grid[62]} updateGrid={updateGrid} revealedCell={starterGrid[62] !== 0} invalidCellNumber={invalidCellNumbers[62]} candidates={candidates[62]} updateCandidates={updateCandidates}/>

            <Cell gridID={63} value={grid[63]} updateGrid={updateGrid} revealedCell={starterGrid[63] !== 0} invalidCellNumber={invalidCellNumbers[63]} candidates={candidates[63]} updateCandidates={updateCandidates}/>
            <Cell gridID={64} value={grid[64]} updateGrid={updateGrid} revealedCell={starterGrid[64] !== 0} invalidCellNumber={invalidCellNumbers[64]} candidates={candidates[64]} updateCandidates={updateCandidates}/>
            <Cell gridID={65} value={grid[65]} updateGrid={updateGrid} revealedCell={starterGrid[65] !== 0} invalidCellNumber={invalidCellNumbers[65]} candidates={candidates[65]} updateCandidates={updateCandidates}/>
            <Cell gridID={66} value={grid[66]} updateGrid={updateGrid} revealedCell={starterGrid[66] !== 0} invalidCellNumber={invalidCellNumbers[66]} candidates={candidates[66]} updateCandidates={updateCandidates}/>
            <Cell gridID={67} value={grid[67]} updateGrid={updateGrid} revealedCell={starterGrid[67] !== 0} invalidCellNumber={invalidCellNumbers[67]} candidates={candidates[67]} updateCandidates={updateCandidates}/>
            <Cell gridID={68} value={grid[68]} updateGrid={updateGrid} revealedCell={starterGrid[68] !== 0} invalidCellNumber={invalidCellNumbers[68]} candidates={candidates[68]} updateCandidates={updateCandidates}/>
            <Cell gridID={69} value={grid[69]} updateGrid={updateGrid} revealedCell={starterGrid[69] !== 0} invalidCellNumber={invalidCellNumbers[69]} candidates={candidates[69]} updateCandidates={updateCandidates}/>
            <Cell gridID={70} value={grid[70]} updateGrid={updateGrid} revealedCell={starterGrid[70] !== 0} invalidCellNumber={invalidCellNumbers[70]} candidates={candidates[70]} updateCandidates={updateCandidates}/>
            <Cell gridID={71} value={grid[71]} updateGrid={updateGrid} revealedCell={starterGrid[71] !== 0} invalidCellNumber={invalidCellNumbers[71]} candidates={candidates[71]} updateCandidates={updateCandidates}/>

            <Cell gridID={72} value={grid[72]} updateGrid={updateGrid} revealedCell={starterGrid[72] !== 0} invalidCellNumber={invalidCellNumbers[72]} candidates={candidates[72]} updateCandidates={updateCandidates}/>
            <Cell gridID={73} value={grid[73]} updateGrid={updateGrid} revealedCell={starterGrid[73] !== 0} invalidCellNumber={invalidCellNumbers[73]} candidates={candidates[73]} updateCandidates={updateCandidates}/>
            <Cell gridID={74} value={grid[74]} updateGrid={updateGrid} revealedCell={starterGrid[74] !== 0} invalidCellNumber={invalidCellNumbers[74]} candidates={candidates[74]} updateCandidates={updateCandidates}/>
            <Cell gridID={75} value={grid[75]} updateGrid={updateGrid} revealedCell={starterGrid[75] !== 0} invalidCellNumber={invalidCellNumbers[75]} candidates={candidates[75]} updateCandidates={updateCandidates}/>
            <Cell gridID={76} value={grid[76]} updateGrid={updateGrid} revealedCell={starterGrid[76] !== 0} invalidCellNumber={invalidCellNumbers[76]} candidates={candidates[76]} updateCandidates={updateCandidates}/>
            <Cell gridID={77} value={grid[77]} updateGrid={updateGrid} revealedCell={starterGrid[77] !== 0} invalidCellNumber={invalidCellNumbers[77]} candidates={candidates[77]} updateCandidates={updateCandidates}/>
            <Cell gridID={78} value={grid[78]} updateGrid={updateGrid} revealedCell={starterGrid[78] !== 0} invalidCellNumber={invalidCellNumbers[78]} candidates={candidates[78]} updateCandidates={updateCandidates}/>
            <Cell gridID={79} value={grid[79]} updateGrid={updateGrid} revealedCell={starterGrid[79] !== 0} invalidCellNumber={invalidCellNumbers[79]} candidates={candidates[79]} updateCandidates={updateCandidates}/>
            <Cell gridID={80} value={grid[80]} updateGrid={updateGrid} revealedCell={starterGrid[80] !== 0} invalidCellNumber={invalidCellNumbers[80]} candidates={candidates[80]} updateCandidates={updateCandidates}/>
        </div> 
    );
}

export default Grid;