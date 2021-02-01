function CellHasNumber(gridID, value, updateGrid, revealedCell, invalidCellNumber) {
    function onContextMenu(e) {
        e.preventDefault();
    }

    function mouseDownHandler(e) {
        // prevents scroll circle
        e.preventDefault();

        // if middle mouse button is clicked
        if(revealedCell === false && e.button === 1) {
            updateGrid(gridID, 0);
        }
    }

    return (
        <div>
            <div className={revealedCell ? 'cellNumberRevealed' : 'cellNumber'} onContextMenu={onContextMenu} onMouseDown={mouseDownHandler}>
                {value}
                <div className={invalidCellNumber ? 'invalidCellNumber' : ''}></div>
            </div>
        </div>
    );
}

export default CellHasNumber;