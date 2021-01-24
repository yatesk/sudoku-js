import React, { useState } from "react";

import "../index.css";

function Cell({value, disableBoard}) {
    const [candidates, setCandidates] = useState(Array(9).fill(true));

    function onClick(e) {
        updateCandidates(parseInt(e.target.id));
    }

    function updateCandidates(cell) {
        const tempCandidates = candidates.slice();

        tempCandidates[cell - 1] = !(tempCandidates[cell - 1]);

        setCandidates(tempCandidates);
    }

    // useEffect(() => {
    //     console.log('test');

    // }, [candidates]);

    return (
        <div className='cell' disabled={disableBoard} value={value} onClick={onClick}>
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

export default Cell;