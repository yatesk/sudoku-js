import React, { useState, useEffect } from "react";

import "../index.css";

function HasCandidates() {
    const [candidates, setCandidates] = useState(Array(9).fill(true));

    function updateCandidates(cell) {
        const tempCandidates = candidates.slice();

        tempCandidates[cell - 1] = !(tempCandidates[cell - 1]);

        setCandidates(tempCandidates);
    }

    function onClick(e) {
        updateCandidates(parseInt(e.target.id));
    }

    return (
        <div className='cell' onClick={onClick}>
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

function HasNumber(id, value, numbers, setNumbers) {
    function onClick(e) {
        const newNumbers = [...numbers];
        newNumbers[id] = null;

        console.log(numbers);
        console.log(newNumbers);

        setNumbers(newNumbers);

        console.log("number clicked");
    }   

    return (
    <div className='cellNumber' onClick={onClick}>
        {value}
    </div> 
    );
}



function Cell({id, value, numbers, setNumbers}) {

    return (
        <>
            {value !== null ? HasNumber(id, value, numbers, setNumbers) : HasCandidates() }
        </>
    );
}

export default Cell;