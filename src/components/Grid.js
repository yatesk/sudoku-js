import React from "react";

import SubGrid from "./SubGridRow.js"

import "../index.css";

function Grid({resetGame, puzzle}) {

    function onClick(e) {
        console.log('board clicked');
    }

    console.log(puzzle.slice(0, 9));
    console.log(puzzle.slice(9, 18));

    return (
        <div className='gameBoardGrid' onClick={onClick}>
            <SubGrid subGridPuzzle = {puzzle.slice(0, 9)}/>
            <SubGrid subGridPuzzle = {puzzle.slice(9, 18)}/>
            <SubGrid subGridPuzzle = {puzzle.slice(18, 27)}/>
            <SubGrid subGridPuzzle = {puzzle.slice(27, 36)}/>
            <SubGrid subGridPuzzle = {puzzle.slice(36, 45)}/>
            <SubGrid subGridPuzzle = {puzzle.slice(45, 54)}/>
            <SubGrid subGridPuzzle = {puzzle.slice(54, 63)}/>
            <SubGrid subGridPuzzle = {puzzle.slice(63, 72)}/>
            <SubGrid subGridPuzzle = {puzzle.slice(72, 81)}/>
        </div> 
    );
}

export default Grid;