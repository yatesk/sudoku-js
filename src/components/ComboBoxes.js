function ComboBoxes({ setPuzzleSource, setPuzzleDifficulty }) {

	function puzzleSourceChange(event) {
		setPuzzleSource(event.target.value);
	}

	function puzzleDifficultyChange(event) {
		setPuzzleDifficulty(event.target.value);
	}

	return (
		<div className="gridDisplay select">
			<label htmlFor="puzzleSource">Puzzle Source:</label>
			<select id="puzzleSource" onChange={puzzleSourceChange} name="puzzleSource">
				<option value="sugoku">Sugoku</option>
			</select>
	
			<label htmlFor="puzzleDifficulty">Puzzle Difficulty:</label>
			<select id="puzzleDifficulty" onChange={puzzleDifficultyChange} name="puzzleDifficulty">
				<option value="easy">Easy</option>
				<option value="medium">Medium</option>
				<option value="hard">Hard</option>
			</select>
		</div>
	);
}

export default ComboBoxes;