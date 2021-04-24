import React, { useState, useEffect } from "react";

import Timer from "./Timer.js"
import Grid from "./Grid.js"
import CheckBoxes from "./CheckBoxes.js"
import ComboBoxes from "./ComboBoxes.js"
import Buttons from "./Buttons.js"
import "../index.css";

function Sudoku() {
	const starterGrid = [0, 0, 5, 0, 6, 0, 3, 2, 0,
											 0, 0, 0, 3, 0, 0, 0, 0, 4,
											 0, 0, 0, 9, 0, 7, 0, 0, 0,
											 3, 0, 2, 8, 0, 0, 0, 0, 7,
											 0, 0, 7, 0, 0, 0, 4, 0, 5,
											 0, 9, 0, 0, 0, 1, 0, 0, 8,
											 0, 0, 3, 0, 0, 0, 0, 6, 0,
											 0, 0, 0, 0, 7, 0, 0, 0, 0,
											 8, 6, 0, 0, 2, 0, 0, 0, 0];

	// const starterGrid2 = [0, 0, 0, 0, 0, 0, 0, 0, 0,
	//    0, 0, 0, 0, 0, 0, 0, 0, 0,
	//    0, 0, 0, 0, 0, 0, 0, 0, 0,
	//    0, 0, 0, 0, 0, 0, 0, 0, 0,
	//    0, 0, 0, 0, 0, 0, 0, 0, 0,
	//    0, 0, 0, 0, 0, 0, 0, 0, 0,
	//    0, 0, 0, 0, 0, 0, 0, 0, 0,
	//    0, 0, 0, 0, 0, 0, 0, 0, 0,
	//    0, 0, 0, 0, 0, 0, 0, 0, 0];

	const [gameId, setGameId] = useState(1);

	const [resetTimer, setResetTimer] = useState(false);
	
	const [hiddenSinglesToggle, setHiddenSinglesToggle] = useState(false);
	const [nakedSinglesToggle, setNakedSinglesToggle] = useState(false);
	const [showCandidatesToggle, setShowCandidatesToggle] = useState(false);

	const [isGamePaused, setIsGamePaused] = useState(false);
	const [isPuzzleCompleted, setIsPuzzleCompleted] = useState(false);
	const [isPuzzleSolvable, setIsPuzzleSolvable] = useState(true);

	const [puzzleSource, setPuzzleSource] = useState('sugoku');
	const [puzzleDifficulty, setPuzzleDifficulty] = useState('easy');

	const [revealedGrid, setRevealedGrid] = useState(starterGrid);
	const [grid, setGrid] = useState(revealedGrid);

	const [candidates, setCandidates] = useState(Array(81).fill([]));
	
	const [hiddenSingles, setHiddenSingles] = useState(Array(81).fill([]));

	function newPuzzle() {
		createNewPuzzle();
		setResetTimer(true);
	}

	function createNewPuzzle() {
		if (puzzleSource === 'sugoku') {
			fetch(`https://sugoku.herokuapp.com/board?difficulty=${puzzleDifficulty}`)
			.then(response => {
				return response.text();
			})
			.then(function (html) {
				let newPuzzle = JSON.stringify(html);

				let tempGrid = [];

				for (let index = 0; index < newPuzzle.length; index++) {
					let c = newPuzzle[index]
					if (c >= '0' && c <= '9') {
						tempGrid.push(parseInt(c), 10);
					}
				}

				setRevealedGrid(tempGrid);
				setGrid(tempGrid);
			})
			.catch(function (err) {
				// 'Not Found'
				console.log(err.statusText);
			});
		}
	}

	function savePuzzle() {
		localStorage.setItem('savedGrid',  JSON.stringify(grid));
		localStorage.setItem('savedRevealedGrid',JSON.stringify(revealedGrid));
	}

	function pauseGame() {
		setIsGamePaused(!isGamePaused);
	}

	function resetPuzzle() {
		setGrid(revealedGrid);
		setCandidates(Array(81).fill([]));
		setHiddenSingles(Array(81).fill([]));
		setResetTimer(true);

		setIsGamePaused(false);
		setIsPuzzleCompleted(false);
	}
 
	function updateCandidates(cell, candidate) {
		const tempCandidates = [...candidates];

		let index = tempCandidates[cell].indexOf(candidate);
		if (index === -1) {
			tempCandidates[cell] = [...tempCandidates[cell], candidate];
		} else {
			tempCandidates[cell].splice(index, 1);
		}

		setCandidates(tempCandidates);
	}

	// refactor?
	function singles(array) {
		let single = [];
		for (let index = 0; index < array.length; index++) {
			if (array.indexOf(array[index], array.indexOf(array[index]) + 1) === -1)
				single.push(array[index]);
		};

		return single;
	};
      
	// refactor?  BUGS
	function findHiddenSingles() {
		// rows singles
		let allTheRowSingles = [];
		for (let row = 0; row < 81; row+=9) {
			let oneRow = [];
			for (let index = row; index < row+9; index++) {
				oneRow = oneRow.concat(candidates[index]);
			}

			allTheRowSingles.push(singles(oneRow));
		}

		// columns singles
		let allTheColumnSingles = [];
		for (let column = 0; column < 9; column++) {
			let oneColumn = [];
			for (let index = column; index < 81; index+=9) {
					oneColumn = oneColumn.concat(candidates[index]);
			}

			allTheColumnSingles.push(singles(oneColumn));
		}

		// subgrid singles
		const subGridStartingIndexes = [0, 3, 6, 27, 30, 33, 54, 57, 60]
		let allTheSubGridCandidates = [];
		for (let subGrid = 0; subGrid < 9; subGrid++) {
			const subGridStartingIndex = subGridStartingIndexes[subGrid];
			let oneSubGrid = []

			for (let column = subGridStartingIndex; column < 3 + subGridStartingIndex; column++) {
				for (let row = 0; row < 20; row+=9) {
					oneSubGrid = oneSubGrid.concat(candidates[row+column]);
				}
			}

			allTheSubGridCandidates.push(singles(oneSubGrid));
		}

		const tempHiddenSingles = []
		for (let index = 0; index < 81; index++) {
			const tempSingle = []
			for (let candidate = 0; candidate < candidates[index].length; candidate++) {
				const theRow = Math.floor(index/9);
				const theColumn = index%9;
				const theSubGrid = findSubGrid(theColumn, theRow);

				if (allTheRowSingles[theRow].includes(candidates[index][candidate]) ||
						allTheColumnSingles[theColumn].includes(candidates[index][candidate]) ||
						allTheSubGridCandidates[theSubGrid].includes(candidates[index][candidate])) {
							tempSingle.push(candidates[index][candidate]);
				}
			}
			if (tempSingle.length > 0) {
				tempHiddenSingles.push(tempSingle);
			} else {
				tempHiddenSingles.push([]);
			}
				
		}
		setHiddenSingles(tempHiddenSingles);
	}

	function findCandidates() {
		// Find all numbers in each row
		let rowNumbers = [];
		for (let row = 0; row < 81; row+=9) {
			let oneRow = [];
			for (let column = 0; column < 9; column++) {
				if (grid[row+column] > 0) {
					oneRow.push(grid[row+column]);
				}
			}

			rowNumbers.push(oneRow);
		}
		
		// Find all numbers in each column
		let columnNumbers = [];
		for (let column = 0; column < 9; column++) {
			let oneColumn = [];
			for (let row = 0; row < 81; row+=9) {
				if (grid[row+column] > 0) {
					oneColumn.push(grid[row+column]);
				}
			}

			columnNumbers.push(oneColumn);
		}

		// Find all numbers in each subgrid
		let subGridNumbers = [];
		for (let subGrid = 0; subGrid < 9; subGrid++) {
			const subGridStartingIndex = Math.floor(subGrid / 3) * 27 + ((subGrid % 3) * 3);
			let oneSubGrid = []

			for (let column = subGridStartingIndex; column < 3 + subGridStartingIndex; column++) {
				for (let row = 0; row < 20; row+=9) {
					if (grid[row+column] > 0) {
						oneSubGrid.push(grid[row+column]);
					}
				}
			}

			subGridNumbers.push(oneSubGrid);
		}

		const possibleCandidates = [1, 2, 3, 4, 5, 6, 7, 8, 9];
		const tempCandidates = Array(81).fill([]);
		for (let index = 0; index < grid.length; index++) {
			if (grid[index] === 0) {
				const row = Math.floor(index/9);
				const column = index%9;
				const subGrid = findSubGrid(column, row);

				const notPossibleCandidates = rowNumbers[row].concat(columnNumbers[column], subGridNumbers[subGrid]);
				const cellsCandidates = possibleCandidates.filter(i => !notPossibleCandidates.includes(i));

				tempCandidates[index] = cellsCandidates;
			}
			else {
				tempCandidates[index] = [grid[index]];
			}
		}

		setCandidates(tempCandidates);
	}

	// refactor?
	function findSubGrid(column, row) {
		if (row < 3) {
			if (column < 3) {
				return 0;
			}
			else if (column < 6) {
				return 1;
			}
			else if (column < 9) {
				return 2;
			}
		} 
		else if ( row < 6) {
			if (column < 3) {
				return 3;
			}
			else if (column < 6) {
				return 4;
			}
			else if (column < 9) {
				return 5;
			}    
		}
		else if ( row < 9) {
			if (column < 3) {
				return 6;
			}
			else if (column < 6) {
				return 7;
			}
			else if (column < 9) {
				return 8;
			}    
		}
	}

	function puzzleCompleted() {
			setIsPuzzleCompleted(true);
			console.log('winner');

			// Remove localStorage on puzzle completion?
			// localStorage.removeItem('savedGrid');
			// localStorage.removeItem('savedRevealedGrid');
	}

	useEffect(() => {
		const savedGrid = localStorage.getItem('savedGrid');

		if (savedGrid !== null) {
			setGrid(JSON.parse(savedGrid));
		} else {
			setGrid(starterGrid);
		}

		const savedRevealedGrid = localStorage.getItem('savedRevealedGrid');

		if (savedRevealedGrid !== null) {
			setRevealedGrid(JSON.parse(savedRevealedGrid));
		} else {
			setRevealedGrid(starterGrid);
		}
	}, []);

	useEffect(() => {
		if (hiddenSinglesToggle) {
			findHiddenSingles();
		}
	}, [candidates]);
	
	useEffect(() => {
		findCandidates();

		if (!showCandidatesToggle) {
			setHiddenSinglesToggle(false);
			setNakedSinglesToggle(false);
			setCandidates(Array(81).fill([]));
		} 
	}, [hiddenSinglesToggle, nakedSinglesToggle, showCandidatesToggle, grid]);

	return (
		<div className="container">
      <div className="header">
        <h1 className="title">Sudoku</h1>
        <Timer  isGamePaused={isGamePaused} 
                isPuzzleCompleted={isPuzzleCompleted} 
                resetTimer={resetTimer} 
                setResetTimer={setResetTimer}/>
        <button id="pauseGameButton" onClick={pauseGame}>Pause Game</button>        
        {/* <input type="button" id="pauseGameButton" value="Pause Game" onClick={pauseGame}/> */}
      </div>
      <div className="gridDisplay">
        <Grid key={gameId}
          grid={grid} 
          setGrid={setGrid} 
          revealedGrid={revealedGrid} 
          candidates={candidates} 
          updateCandidates={updateCandidates} 
          nakedSinglesToggle={nakedSinglesToggle} 
          hiddenSinglesToggle={hiddenSinglesToggle} 
          hiddenSingles={hiddenSingles}
          isGamePaused={isGamePaused}
          puzzleCompleted={puzzleCompleted}
          setIsPuzzleSolvable={setIsPuzzleSolvable}/>
      </div>
      <div className="side-bar">
        <ComboBoxes setPuzzleSource={setPuzzleSource}
                    setPuzzleDifficulty={setPuzzleDifficulty}/>
        <Buttons newPuzzle={newPuzzle} 
                savePuzzle={savePuzzle}
                pauseGame={pauseGame} 
                isGamePaused={isGamePaused} 
                resetPuzzle={resetPuzzle} 
                // resetTimer={resetTimer}
                // setResetTimer={setResetTimer}
                grid={grid}
                setGrid={setGrid}
                findSubGrid={findSubGrid}
                isPuzzleCompleted={isPuzzleCompleted}
                isPuzzleSolvable={isPuzzleSolvable} />
      </div>
      <div className="footer">
        <CheckBoxes showCandidatesToggle={showCandidatesToggle} 
                    setShowCandidatesToggle={setShowCandidatesToggle}
                    hiddenSinglesToggle={hiddenSinglesToggle}
                    setHiddenSinglesToggle={setHiddenSinglesToggle}
                    nakedSinglesToggle={nakedSinglesToggle}
                    setNakedSinglesToggle={setNakedSinglesToggle} />
      </div>
		</div>
	);
}

export default Sudoku;