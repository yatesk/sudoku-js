
import SolvePuzzle from "./SolvePuzzle.js"

import "../styles/Buttons.css";

function Buttons({ newPuzzle, savePuzzle, pauseGame, isGamePaused, resetPuzzle, resetTimer, setResetTimer, grid, setGrid, findSubGrid, isPuzzleCompleted, isPuzzleSolvable }) {
	return (
		<div className='theButtons'>
				<input type="button" id="newPuzzleButton" value="New Puzzle" onClick={newPuzzle}/>
			<div> 
        <input type="button" id="savePuzzleButton" value="Save Puzzle"onClick={savePuzzle}/>
				<input type="button" id="resetPuzzleButton" value="Reset Puzzle" onClick={resetPuzzle}/>
				<SolvePuzzle grid={grid} setGrid={setGrid} findSubGrid={findSubGrid} isPuzzleSolvable={isPuzzleSolvable}/>
			</div>
		</div>
	);
}

export default Buttons;