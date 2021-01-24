import React, { useState } from "react";

import Cell from "./Cell.js"

import "../index.css";

function SubGrid() {

    function onClick(e) {
        console.log('board clicked');
    }

    return (
        <div className='subGrid' onClick={onClick}>
            <Cell />
            <Cell />
            <Cell />
            <Cell />
            <Cell />
            <Cell />
            <Cell />
            <Cell />
            <Cell />
        </div> 
    );
}

export default SubGrid;