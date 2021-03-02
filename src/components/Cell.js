import React from "react";

import CellHasNumber from "./CellHasNumber.js"
import CellHasCandidates from "./CellHasCandidates.js"

import "../index.css";

function Cell({ gridID, value, updateGrid, revealedCell, invalidCellNumber, candidates, updateCandidates, nakedSinglesToggle, hiddenSinglesToggle, hiddenSingles, isGamePaused }) {
	return (
		<>
			{value === 0 ? CellHasCandidates(gridID, updateGrid, candidates, updateCandidates, nakedSinglesToggle, hiddenSinglesToggle, hiddenSingles, isGamePaused) : CellHasNumber(gridID, value, updateGrid, revealedCell, invalidCellNumber, isGamePaused) }
		</>
	);
}

export default Cell;