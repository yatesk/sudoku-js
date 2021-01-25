import React, { useState } from "react";

import Cell from "./Cell.js"

import "../index.css";

function SubGridRow({subGridPuzzle}) {

    // const [numbers, setNumbers] = useState(
    //     [Math.floor(Math.random() * 9) + 1,
    //     Math.floor(Math.random() * 9) + 1,
    //     Math.floor(Math.random() * 9) + 1,
    //     Math.floor(Math.random() * 9) + 1,
    //     Math.floor(Math.random() * 9) + 1,
    //     Math.floor(Math.random() * 9) + 1,
    //     Math.floor(Math.random() * 9) + 1,
    //     Math.floor(Math.random() * 9) + 1,
    //     Math.floor(Math.random() * 9) + 1]);

    const [numbers, setNumbers] = useState(5);

    function setNumbers2(newNum) {
        setNumbers(newNum);
    }
    
    return (
        <div className='subGrid' >
            <Cell id={0} value={subGridPuzzle[0]} numbers={numbers} setNumbers={setNumbers}/>
            <Cell id={1} value={subGridPuzzle[1]} numbers={numbers} setNumbers={setNumbers}/>
            <Cell id={2} value={subGridPuzzle[2]} numbers={numbers} setNumbers={setNumbers}/>
            <Cell id={3} value={subGridPuzzle[3]} numbers={numbers} setNumbers={setNumbers}/>
            <Cell id={4} value={subGridPuzzle[4]} numbers={numbers} setNumbers={setNumbers}/>
            <Cell id={5} value={subGridPuzzle[5]} numbers={numbers} setNumbers={setNumbers}/>
            <Cell id={6} value={subGridPuzzle[6]} numbers={numbers} setNumbers={setNumbers}/>
            <Cell id={7} value={subGridPuzzle[7]} numbers={numbers} setNumbers={setNumbers}/>
            <Cell id={8} value={subGridPuzzle[8]} numbers={numbers} setNumbers={setNumbers}/>
        </div> 
    );
}

export default SubGridRow;