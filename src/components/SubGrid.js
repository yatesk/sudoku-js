import React, { useState } from "react";

import Cell from "./Cell.js"

import "../index.css";

function SubGrid() {

    const [numbers, setNumbers] = useState(
        [Math.floor(Math.random() * 9) + 1,
        Math.floor(Math.random() * 9) + 1,
        Math.floor(Math.random() * 9) + 1,
        Math.floor(Math.random() * 9) + 1,
        Math.floor(Math.random() * 9) + 1,
        Math.floor(Math.random() * 9) + 1,
        Math.floor(Math.random() * 9) + 1,
        Math.floor(Math.random() * 9) + 1,
        Math.floor(Math.random() * 9) + 1]);

    function setNumbers2(newNum) {
        setNumbers(newNum);
    }

    return (
        <div className='subGrid' >
            <Cell id={0} value={numbers[0]} numbers={numbers} setNumbers={setNumbers}/>
            <Cell id={1} value={numbers[1]} numbers={numbers} setNumbers={setNumbers}/>
            <Cell id={2} value={numbers[2]} numbers={numbers} setNumbers={setNumbers}/>
            <Cell id={3} value={numbers[3]} numbers={numbers} setNumbers={setNumbers}/>
            <Cell id={4} value={numbers[4]} numbers={numbers} setNumbers={setNumbers}/>
            <Cell id={5} value={numbers[5]} numbers={numbers} setNumbers={setNumbers}/>
            <Cell id={6} value={numbers[6]} numbers={numbers} setNumbers={setNumbers}/>
            <Cell id={7} value={numbers[7]} numbers={numbers} setNumbers={setNumbers}/>
            <Cell id={8} value={numbers[8]} numbers={numbers} setNumbers={setNumbers}/>
        </div> 
    );
}

export default SubGrid;