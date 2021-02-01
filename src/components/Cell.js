import React from "react";

import CellHasNumber from "./CellHasNumber.js"
import CellHasCandidates from "./CellHasCandidates.js"

import "../index.css";

function Cell({gridID, value, updateGrid, revealedCell, invalidCellNumber, candidates, updateCandidates}) {
    // useEffect(() => {
    //     console.log("test");
    // }, [value]);

    return (
        <>
            {value !== 0 ? CellHasNumber(gridID, value, updateGrid, revealedCell, invalidCellNumber) : CellHasCandidates(gridID, updateGrid, candidates, updateCandidates) }
        </>
    );
}

export default Cell;