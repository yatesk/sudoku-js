import React, { useState } from "react";

function CellHasCandidates(gridID, updateGrid, candidates, updateCandidates) {
    // const [candidates, setCandidates] = useState(Array(9).fill(false));

    function onClick(e) {
        updateGrid(gridID, parseInt(e.target.id));
    }

    function onContextMenu(e) {
        e.preventDefault();
        updateCandidates(gridID, parseInt(e.target.id));
    }

    function mouseDownHandler(e) {
        // prevents scroll circle
        e.preventDefault();
    }

    return (
        <div className='cell' onClick={onClick} onContextMenu={onContextMenu} onMouseDown={mouseDownHandler}>
            { candidates.includes(1) ? <div id="1" className='candidateCell'>1</div> : <div id="1" className='candidateCell'/> }
            { candidates.includes(2) ? <div id="2" className='candidateCell'>2</div> : <div id="2" className='candidateCell'/> }
            { candidates.includes(3) ? <div id="3" className='candidateCell'>3</div> : <div id="3" className='candidateCell'/> }

            { candidates.includes(4) ? <div id="4" className='candidateCell'>4</div> : <div id="4" className='candidateCell'/> }
            { candidates.includes(5) ? <div id="5" className='candidateCell'>5</div> : <div id="5" className='candidateCell'/> }
            { candidates.includes(6) ? <div id="6" className='candidateCell'>6</div> : <div id="6" className='candidateCell'/> }

            { candidates.includes(7) ? <div id="7" className='candidateCell'>7</div> : <div id="7" className='candidateCell'/> }
            { candidates.includes(8) ? <div id="8" className='candidateCell'>8</div> : <div id="8" className='candidateCell'/> }
            { candidates.includes(9) ? <div id="9" className='candidateCell'>9</div> : <div id="9" className='candidateCell'/> }
        </div> 
    );
}

export default CellHasCandidates;