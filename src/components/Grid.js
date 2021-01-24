import React, { useState } from "react";

import SubGrid from "./SubGrid.js"

import "../index.css";

function Grid() {

    function onClick(e) {
        console.log('board clicked');
    }

    return (
        <div className='gameBoardGrid' onClick={onClick}>
            <SubGrid />
            <SubGrid />
            <SubGrid />
            <SubGrid />
            <SubGrid />
            <SubGrid />
            <SubGrid />
            <SubGrid />
            <SubGrid />
        </div> 
    );
}

export default Grid;