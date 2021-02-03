import React from "react";

function CellHasCandidates(gridID, updateGrid, candidates, updateCandidates, nakedSinglesToggle) {
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

    function highlightNakedSingles() {
        return nakedSinglesToggle && candidates.length === 1;
    }

    return (
        <div className='cell' onClick={onClick} onContextMenu={onContextMenu} onMouseDown={mouseDownHandler}>
            { candidates.includes(1) ? <div id="1" className={`candidateCell ${highlightNakedSingles() ? "redText" : "blackText"}`}>1</div> : <div id="1" className='candidateCell'/> }
            { candidates.includes(2) ? <div id="2" className={`candidateCell ${highlightNakedSingles() ? "redText" : "blackText"}`}>2</div> : <div id="2" className='candidateCell'/> }
            { candidates.includes(3) ? <div id="3" className={`candidateCell ${highlightNakedSingles() ? "redText" : "blackText"}`}>3</div> : <div id="3" className='candidateCell'/> }

            { candidates.includes(4) ? <div id="4" className={`candidateCell ${highlightNakedSingles() ? "redText" : "blackText"}`}>4</div> : <div id="4" className='candidateCell'/> }
            { candidates.includes(5) ? <div id="5" className={`candidateCell ${highlightNakedSingles() ? "redText" : "blackText"}`}>5</div> : <div id="5" className='candidateCell'/> }
            { candidates.includes(6) ? <div id="6" className={`candidateCell ${highlightNakedSingles() ? "redText" : "blackText"}`}>6</div> : <div id="6" className='candidateCell'/> }

            { candidates.includes(7) ? <div id="7" className={`candidateCell ${highlightNakedSingles() ? "redText" : "blackText"}`}>7</div> : <div id="7" className='candidateCell'/> }
            { candidates.includes(8) ? <div id="8" className={`candidateCell ${highlightNakedSingles() ? "redText" : "blackText"}`}>8</div> : <div id="8" className='candidateCell'/> }
            { candidates.includes(9) ? <div id="9" className={`candidateCell ${highlightNakedSingles() ? "redText" : "blackText"}`}>9</div> : <div id="9" className='candidateCell'/> }
        </div> 
    );
}

export default CellHasCandidates;