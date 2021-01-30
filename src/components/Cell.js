import React, { useState, useEffect } from "react";

import "../index.css";

function HasCandidates(gridID, updateGrid) {
    const [candidates, setCandidates] = useState(Array(9).fill(false));

    function updateCandidates(cell) {
        const tempCandidates = candidates.slice();

        tempCandidates[cell - 1] = !(tempCandidates[cell - 1]);

        setCandidates(tempCandidates);
    }

    function onClick(e) {
        updateGrid(gridID, parseInt(e.target.id));
    }

    function onContextMenu(e) {
        e.preventDefault();
        updateCandidates(parseInt(e.target.id));
    }

    function mouseDownHandler(e) {
        // prevents scroll circle
        e.preventDefault();
    }

    return (
        <div className='cell' onClick={onClick} onContextMenu={onContextMenu} onMouseDown={mouseDownHandler}>
            { candidates[0] ? <div id="1" className='candidateCell'>1</div> : <div id="1" className='candidateCell'/> }
            { candidates[1] ? <div id="2" className='candidateCell'>2</div> : <div id="2" className='candidateCell'/> }
            { candidates[2] ? <div id="3" className='candidateCell'>3</div> : <div id="3" className='candidateCell'/> }

            { candidates[3] ? <div id="4" className='candidateCell'>4</div> : <div id="4" className='candidateCell'/> }
            { candidates[4] ? <div id="5" className='candidateCell'>5</div> : <div id="5" className='candidateCell'/> }
            { candidates[5] ? <div id="6" className='candidateCell'>6</div> : <div id="6" className='candidateCell'/> }

            { candidates[6] ? <div id="7" className='candidateCell'>7</div> : <div id="7" className='candidateCell'/> }
            { candidates[7] ? <div id="8" className='candidateCell'>8</div> : <div id="8" className='candidateCell'/> }
            { candidates[8] ? <div id="9" className='candidateCell'>9</div> : <div id="9" className='candidateCell'/> }
        </div> 
    );
}

function HasNumber(gridID, value, updateGrid, revealedCell, invalidCellNumber) {
    function onContextMenu(e) {
        e.preventDefault();
    }

    function mouseDownHandler(e) {
        // prevents scroll circle
        e.preventDefault();

        // if middle mouse button is clicked
        if(revealedCell === false && e.button === 1) {
            updateGrid(gridID, 0);
        }
    }

    return (
        <div>
            <div className={revealedCell ? 'cellNumberRevealed' : 'cellNumber'} onContextMenu={onContextMenu} onMouseDown={mouseDownHandler}>
                {value}
                <div className={invalidCellNumber ? 'invalidCellNumber' : ''}></div>
            </div>
        </div>
    );
}

function Cell({gridID, value, updateGrid, revealedCell, invalidCellNumber}) {
    // useEffect(() => {
    //     console.log("test");
    // }, [value]);

    return (
        <>
            {value !== 0 ? HasNumber(gridID, value, updateGrid, revealedCell, invalidCellNumber) : HasCandidates(gridID, updateGrid) }
        </>
    );
}

export default Cell;