import "../styles/CellHasCandidates.css";

function CellHasCandidates(gridID, updateGrid, candidates, updateCandidates, nakedSinglesToggle, hiddenSinglesToggle, hiddenSingles, isGamePaused) {

	function onClick(e) {
		updateGrid(gridID, parseInt(e.target.id), 10);
	}

	function onContextMenu(e) {
		e.preventDefault();
		updateCandidates(gridID, parseInt(e.target.id), 10);
	}

	function mouseDownHandler(e) {
		// prevents scroll circle
		e.preventDefault();
	}

	function highlightNakedSingles() {
		return nakedSinglesToggle && candidates.length === 1;
	}

	function highlightHiddenSingles(number) {
		return  hiddenSinglesToggle && hiddenSingles[gridID].includes(number);
	}

	// refactor
	function getStyle() {
		const notPaused = {
			marginRight: "5px",
		}

		const paused = {
			marginRight: "5px",
			pointerEvents: "none",
			opacity: "0.4",
		}

		if (isGamePaused) {
			return paused;
		} 

		return notPaused;
	}

	return (
		<div style={getStyle()} className="cell" onClick={onClick} onContextMenu={onContextMenu} onMouseDown={mouseDownHandler} >
			{ candidates.includes(1) ? <div id="1" className={`candidateCell ${highlightNakedSingles() || highlightHiddenSingles(1) ? "redText" : "blackText"}`}>1</div> : <div id="1" className="candidateCell"/> }
			{ candidates.includes(2) ? <div id="2" className={`candidateCell ${highlightNakedSingles() || highlightHiddenSingles(2) ? "redText" : "blackText"}`}>2</div> : <div id="2" className="candidateCell"/> }
			{ candidates.includes(3) ? <div id="3" className={`candidateCell ${highlightNakedSingles() || highlightHiddenSingles(3) ? "redText" : "blackText"}`}>3</div> : <div id="3" className="candidateCell"/> }

			{ candidates.includes(4) ? <div id="4" className={`candidateCell ${highlightNakedSingles() || highlightHiddenSingles(4) ? "redText" : "blackText"}`}>4</div> : <div id="4" className="candidateCell"/> }
			{ candidates.includes(5) ? <div id="5" className={`candidateCell ${highlightNakedSingles() || highlightHiddenSingles(5) ? "redText" : "blackText"}`}>5</div> : <div id="5" className="candidateCell"/> }
			{ candidates.includes(6) ? <div id="6" className={`candidateCell ${highlightNakedSingles() || highlightHiddenSingles(6) ? "redText" : "blackText"}`}>6</div> : <div id="6" className="candidateCell"/> }

			{ candidates.includes(7) ? <div id="7" className={`candidateCell ${highlightNakedSingles() || highlightHiddenSingles(7) ? "redText" : "blackText"}`}>7</div> : <div id="7" className="candidateCell"/> }
			{ candidates.includes(8) ? <div id="8" className={`candidateCell ${highlightNakedSingles() || highlightHiddenSingles(8) ? "redText" : "blackText"}`}>8</div> : <div id="8" className="candidateCell"/> }
			{ candidates.includes(9) ? <div id="9" className={`candidateCell ${highlightNakedSingles() || highlightHiddenSingles(9) ? "redText" : "blackText"}`}>9</div> : <div id="9" className="candidateCell"/> }
		</div>
	);
}

export default CellHasCandidates;