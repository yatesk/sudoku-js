function ComboBoxes() {
    return (
        <div className='gridDisplay select'>
            <label htmlFor="puzzleSource">Puzzle Source:</label>
            <select id="puzzleSource" name="puzzleSource">
                <option value="nyTimes">NY Times</option>
                <option value="qqWing">QQ Wing</option>
                <option value="random">Random</option>
                <option value="other">Other</option>
            </select>
        
            <label htmlFor="puzzleDifficulty">Puzzle Difficulty:</label>
            <select id="puzzleDifficulty" name="puzzleDifficulty">
                <option value="easy">Easy</option>
                <option value="medium">Medium</option>
                <option value="hard">Hard</option>
            </select>
        </div>
    );
}

export default ComboBoxes;