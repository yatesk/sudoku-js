import React, { useState, useEffect } from "react";

import Cell from "./Cell.js"
import "../index.css";

function Grid({resetGame, grid, setGrid, starterGrid}) {
    const [invalidCellNumbers, setInvalidCellNumbers] = useState(Array(81).fill(false));

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

    function checkForInvalidCellNumbers() {
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
                for (let row = subGridStartingIndex; row < subGridStartingIndex + 20; row+=9) {
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
            
        updateInvalidCellNumbers(invalidCells);
    }

    useEffect(() => {
        checkForInvalidCellNumbers();
    }, [grid]);

    return (
        <div className='gameBoardGrid' onClick={onClick}>
            <Cell gridID={0} value={grid[0]} updateGrid={updateGrid} revealedCell={starterGrid[0] !== 0} invalidCellNumber={invalidCellNumbers[0]}/>
            <Cell gridID={1} value={grid[1]} updateGrid={updateGrid} revealedCell={starterGrid[1] !== 0} invalidCellNumber={invalidCellNumbers[1]}/>
            <Cell gridID={2} value={grid[2]} updateGrid={updateGrid} revealedCell={starterGrid[2] !== 0} invalidCellNumber={invalidCellNumbers[2]}/>
            <Cell gridID={3} value={grid[3]} updateGrid={updateGrid} revealedCell={starterGrid[3] !== 0} invalidCellNumber={invalidCellNumbers[3]}/>
            <Cell gridID={4} value={grid[4]} updateGrid={updateGrid} revealedCell={starterGrid[4] !== 0} invalidCellNumber={invalidCellNumbers[4]}/>
            <Cell gridID={5} value={grid[5]} updateGrid={updateGrid} revealedCell={starterGrid[5] !== 0} invalidCellNumber={invalidCellNumbers[5]}/>
            <Cell gridID={6} value={grid[6]} updateGrid={updateGrid} revealedCell={starterGrid[6] !== 0} invalidCellNumber={invalidCellNumbers[6]}/>
            <Cell gridID={7} value={grid[7]} updateGrid={updateGrid} revealedCell={starterGrid[7] !== 0} invalidCellNumber={invalidCellNumbers[7]}/>
            <Cell gridID={8} value={grid[8]} updateGrid={updateGrid} revealedCell={starterGrid[8] !== 0} invalidCellNumber={invalidCellNumbers[8]}/>

            <Cell gridID={9} value={grid[9]} updateGrid={updateGrid} revealedCell={starterGrid[9] !== 0} invalidCellNumber={invalidCellNumbers[9]}/>
            <Cell gridID={10} value={grid[10]} updateGrid={updateGrid} revealedCell={starterGrid[10] !== 0} invalidCellNumber={invalidCellNumbers[10]}/>
            <Cell gridID={11} value={grid[11]} updateGrid={updateGrid} revealedCell={starterGrid[11] !== 0} invalidCellNumber={invalidCellNumbers[11]}/>
            <Cell gridID={12} value={grid[12]} updateGrid={updateGrid} revealedCell={starterGrid[12] !== 0} invalidCellNumber={invalidCellNumbers[12]}/>
            <Cell gridID={13} value={grid[13]} updateGrid={updateGrid} revealedCell={starterGrid[13] !== 0} invalidCellNumber={invalidCellNumbers[13]}/>
            <Cell gridID={14} value={grid[14]} updateGrid={updateGrid} revealedCell={starterGrid[14] !== 0} invalidCellNumber={invalidCellNumbers[14]}/>
            <Cell gridID={15} value={grid[15]} updateGrid={updateGrid} revealedCell={starterGrid[15] !== 0} invalidCellNumber={invalidCellNumbers[15]}/>
            <Cell gridID={16} value={grid[16]} updateGrid={updateGrid} revealedCell={starterGrid[16] !== 0} invalidCellNumber={invalidCellNumbers[16]}/>
            <Cell gridID={17} value={grid[17]} updateGrid={updateGrid} revealedCell={starterGrid[17] !== 0} invalidCellNumber={invalidCellNumbers[17]}/>

            <Cell gridID={18} value={grid[18]} updateGrid={updateGrid} revealedCell={starterGrid[18] !== 0} invalidCellNumber={invalidCellNumbers[18]}/>
            <Cell gridID={19} value={grid[19]} updateGrid={updateGrid} revealedCell={starterGrid[19] !== 0} invalidCellNumber={invalidCellNumbers[19]}/>
            <Cell gridID={20} value={grid[20]} updateGrid={updateGrid} revealedCell={starterGrid[20] !== 0} invalidCellNumber={invalidCellNumbers[20]}/>
            <Cell gridID={21} value={grid[21]} updateGrid={updateGrid} revealedCell={starterGrid[21] !== 0} invalidCellNumber={invalidCellNumbers[21]}/>
            <Cell gridID={22} value={grid[22]} updateGrid={updateGrid} revealedCell={starterGrid[22] !== 0} invalidCellNumber={invalidCellNumbers[22]}/>
            <Cell gridID={23} value={grid[23]} updateGrid={updateGrid} revealedCell={starterGrid[23] !== 0} invalidCellNumber={invalidCellNumbers[23]}/>
            <Cell gridID={24} value={grid[24]} updateGrid={updateGrid} revealedCell={starterGrid[24] !== 0} invalidCellNumber={invalidCellNumbers[24]}/>
            <Cell gridID={25} value={grid[25]} updateGrid={updateGrid} revealedCell={starterGrid[25] !== 0} invalidCellNumber={invalidCellNumbers[25]}/>
            <Cell gridID={26} value={grid[26]} updateGrid={updateGrid} revealedCell={starterGrid[26] !== 0} invalidCellNumber={invalidCellNumbers[26]}/>

            <Cell gridID={27} value={grid[27]} updateGrid={updateGrid} revealedCell={starterGrid[27] !== 0} invalidCellNumber={invalidCellNumbers[27]}/>
            <Cell gridID={28} value={grid[28]} updateGrid={updateGrid} revealedCell={starterGrid[28] !== 0} invalidCellNumber={invalidCellNumbers[28]}/>
            <Cell gridID={29} value={grid[29]} updateGrid={updateGrid} revealedCell={starterGrid[29] !== 0} invalidCellNumber={invalidCellNumbers[29]}/>
            <Cell gridID={30} value={grid[30]} updateGrid={updateGrid} revealedCell={starterGrid[30] !== 0} invalidCellNumber={invalidCellNumbers[30]}/>
            <Cell gridID={31} value={grid[31]} updateGrid={updateGrid} revealedCell={starterGrid[31] !== 0} invalidCellNumber={invalidCellNumbers[31]}/>
            <Cell gridID={32} value={grid[32]} updateGrid={updateGrid} revealedCell={starterGrid[32] !== 0} invalidCellNumber={invalidCellNumbers[32]}/>
            <Cell gridID={33} value={grid[33]} updateGrid={updateGrid} revealedCell={starterGrid[33] !== 0} invalidCellNumber={invalidCellNumbers[33]}/>
            <Cell gridID={34} value={grid[34]} updateGrid={updateGrid} revealedCell={starterGrid[34] !== 0} invalidCellNumber={invalidCellNumbers[34]}/>
            <Cell gridID={35} value={grid[35]} updateGrid={updateGrid} revealedCell={starterGrid[35] !== 0} invalidCellNumber={invalidCellNumbers[35]}/>
 
            <Cell gridID={36} value={grid[36]} updateGrid={updateGrid} revealedCell={starterGrid[36] !== 0} invalidCellNumber={invalidCellNumbers[36]}/>
            <Cell gridID={37} value={grid[37]} updateGrid={updateGrid} revealedCell={starterGrid[37] !== 0} invalidCellNumber={invalidCellNumbers[37]}/>
            <Cell gridID={38} value={grid[38]} updateGrid={updateGrid} revealedCell={starterGrid[38] !== 0} invalidCellNumber={invalidCellNumbers[38]}/>
            <Cell gridID={39} value={grid[39]} updateGrid={updateGrid} revealedCell={starterGrid[39] !== 0} invalidCellNumber={invalidCellNumbers[39]}/>
            <Cell gridID={40} value={grid[40]} updateGrid={updateGrid} revealedCell={starterGrid[40] !== 0} invalidCellNumber={invalidCellNumbers[40]}/>
            <Cell gridID={41} value={grid[41]} updateGrid={updateGrid} revealedCell={starterGrid[41] !== 0} invalidCellNumber={invalidCellNumbers[41]}/>
            <Cell gridID={42} value={grid[42]} updateGrid={updateGrid} revealedCell={starterGrid[42] !== 0} invalidCellNumber={invalidCellNumbers[42]}/>
            <Cell gridID={43} value={grid[43]} updateGrid={updateGrid} revealedCell={starterGrid[43] !== 0} invalidCellNumber={invalidCellNumbers[43]}/>
            <Cell gridID={44} value={grid[44]} updateGrid={updateGrid} revealedCell={starterGrid[44] !== 0} invalidCellNumber={invalidCellNumbers[44]}/>

            <Cell gridID={45} value={grid[45]} updateGrid={updateGrid} revealedCell={starterGrid[45] !== 0} invalidCellNumber={invalidCellNumbers[45]}/>
            <Cell gridID={46} value={grid[46]} updateGrid={updateGrid} revealedCell={starterGrid[46] !== 0} invalidCellNumber={invalidCellNumbers[46]}/>
            <Cell gridID={47} value={grid[47]} updateGrid={updateGrid} revealedCell={starterGrid[47] !== 0} invalidCellNumber={invalidCellNumbers[47]}/>
            <Cell gridID={48} value={grid[48]} updateGrid={updateGrid} revealedCell={starterGrid[48] !== 0} invalidCellNumber={invalidCellNumbers[48]}/>
            <Cell gridID={49} value={grid[49]} updateGrid={updateGrid} revealedCell={starterGrid[49] !== 0} invalidCellNumber={invalidCellNumbers[49]}/>
            <Cell gridID={50} value={grid[50]} updateGrid={updateGrid} revealedCell={starterGrid[50] !== 0} invalidCellNumber={invalidCellNumbers[50]}/>
            <Cell gridID={51} value={grid[51]} updateGrid={updateGrid} revealedCell={starterGrid[51] !== 0} invalidCellNumber={invalidCellNumbers[51]}/>
            <Cell gridID={52} value={grid[52]} updateGrid={updateGrid} revealedCell={starterGrid[52] !== 0} invalidCellNumber={invalidCellNumbers[52]}/>
            <Cell gridID={53} value={grid[53]} updateGrid={updateGrid} revealedCell={starterGrid[53] !== 0} invalidCellNumber={invalidCellNumbers[53]}/>

            <Cell gridID={54} value={grid[54]} updateGrid={updateGrid} revealedCell={starterGrid[54] !== 0} invalidCellNumber={invalidCellNumbers[54]}/>
            <Cell gridID={55} value={grid[55]} updateGrid={updateGrid} revealedCell={starterGrid[55] !== 0} invalidCellNumber={invalidCellNumbers[55]}/>
            <Cell gridID={56} value={grid[56]} updateGrid={updateGrid} revealedCell={starterGrid[56] !== 0} invalidCellNumber={invalidCellNumbers[56]}/>
            <Cell gridID={57} value={grid[57]} updateGrid={updateGrid} revealedCell={starterGrid[57] !== 0} invalidCellNumber={invalidCellNumbers[57]}/>
            <Cell gridID={58} value={grid[58]} updateGrid={updateGrid} revealedCell={starterGrid[58] !== 0} invalidCellNumber={invalidCellNumbers[58]}/>
            <Cell gridID={59} value={grid[59]} updateGrid={updateGrid} revealedCell={starterGrid[59] !== 0} invalidCellNumber={invalidCellNumbers[59]}/>
            <Cell gridID={60} value={grid[60]} updateGrid={updateGrid} revealedCell={starterGrid[60] !== 0} invalidCellNumber={invalidCellNumbers[60]}/>
            <Cell gridID={61} value={grid[61]} updateGrid={updateGrid} revealedCell={starterGrid[61] !== 0} invalidCellNumber={invalidCellNumbers[61]}/>
            <Cell gridID={62} value={grid[62]} updateGrid={updateGrid} revealedCell={starterGrid[62] !== 0} invalidCellNumber={invalidCellNumbers[62]}/>

            <Cell gridID={63} value={grid[63]} updateGrid={updateGrid} revealedCell={starterGrid[63] !== 0} invalidCellNumber={invalidCellNumbers[63]}/>
            <Cell gridID={64} value={grid[64]} updateGrid={updateGrid} revealedCell={starterGrid[64] !== 0} invalidCellNumber={invalidCellNumbers[64]}/>
            <Cell gridID={65} value={grid[65]} updateGrid={updateGrid} revealedCell={starterGrid[65] !== 0} invalidCellNumber={invalidCellNumbers[65]}/>
            <Cell gridID={66} value={grid[66]} updateGrid={updateGrid} revealedCell={starterGrid[66] !== 0} invalidCellNumber={invalidCellNumbers[66]}/>
            <Cell gridID={67} value={grid[67]} updateGrid={updateGrid} revealedCell={starterGrid[67] !== 0} invalidCellNumber={invalidCellNumbers[67]}/>
            <Cell gridID={68} value={grid[68]} updateGrid={updateGrid} revealedCell={starterGrid[68] !== 0} invalidCellNumber={invalidCellNumbers[68]}/>
            <Cell gridID={69} value={grid[69]} updateGrid={updateGrid} revealedCell={starterGrid[69] !== 0} invalidCellNumber={invalidCellNumbers[69]}/>
            <Cell gridID={70} value={grid[70]} updateGrid={updateGrid} revealedCell={starterGrid[70] !== 0} invalidCellNumber={invalidCellNumbers[70]}/>
            <Cell gridID={71} value={grid[71]} updateGrid={updateGrid} revealedCell={starterGrid[71] !== 0} invalidCellNumber={invalidCellNumbers[71]}/>

            <Cell gridID={72} value={grid[72]} updateGrid={updateGrid} revealedCell={starterGrid[72] !== 0} invalidCellNumber={invalidCellNumbers[72]}/>
            <Cell gridID={73} value={grid[73]} updateGrid={updateGrid} revealedCell={starterGrid[73] !== 0} invalidCellNumber={invalidCellNumbers[73]}/>
            <Cell gridID={74} value={grid[74]} updateGrid={updateGrid} revealedCell={starterGrid[74] !== 0} invalidCellNumber={invalidCellNumbers[74]}/>
            <Cell gridID={75} value={grid[75]} updateGrid={updateGrid} revealedCell={starterGrid[75] !== 0} invalidCellNumber={invalidCellNumbers[75]}/>
            <Cell gridID={76} value={grid[76]} updateGrid={updateGrid} revealedCell={starterGrid[76] !== 0} invalidCellNumber={invalidCellNumbers[76]}/>
            <Cell gridID={77} value={grid[77]} updateGrid={updateGrid} revealedCell={starterGrid[77] !== 0} invalidCellNumber={invalidCellNumbers[77]}/>
            <Cell gridID={78} value={grid[78]} updateGrid={updateGrid} revealedCell={starterGrid[78] !== 0} invalidCellNumber={invalidCellNumbers[78]}/>
            <Cell gridID={79} value={grid[79]} updateGrid={updateGrid} revealedCell={starterGrid[79] !== 0} invalidCellNumber={invalidCellNumbers[79]}/>
            <Cell gridID={80} value={grid[80]} updateGrid={updateGrid} revealedCell={starterGrid[80] !== 0} invalidCellNumber={invalidCellNumbers[80]}/>
        </div> 
    );
}

export default Grid;