import Timer from "./Timer.js"
import SolvePuzzle from "./SolvePuzzle.js"

function Buttons({newPuzzle, pauseGame, isGamePaused, resetPuzzle, resetTimer, setResetTimer, grid, setGrid, findSubGrid, isPuzzleCompleted, isPuzzleSolvable}) {
    return (
        <div className='theButtons'>
            <div>
                <input type="button" id="newPuzzleButton" value="New Puzzle" onClick={newPuzzle}/>
            </div>
            <div>
                <input type="button" id="pauseGameButton" value="Pause Game" onClick={pauseGame}/>
            </div>
            
            <div>
                <Timer isGamePaused={isGamePaused} isPuzzleCompleted={isPuzzleCompleted} resetTimer={resetTimer} setResetTimer={setResetTimer}/>
            </div>
            
            <div>
                <input type="button" id="resetPuzzleButton" value="Reset Puzzle" onClick={resetPuzzle}/>
            </div>
            <div>
                <SolvePuzzle grid={grid} setGrid={setGrid} findSubGrid={findSubGrid} isPuzzleSolvable={isPuzzleSolvable}/>
            </div>
        </div>
    );
}

export default Buttons;