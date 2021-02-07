function CellHasNumber(gridID, value, updateGrid, revealedCell, invalidCellNumber, isGamePaused) {
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

    // refactor
    function getStyle() {
        let notPaused = {
            marginRight: "5px",
        }

        let paused = {
            marginRight: "5px",
            pointerEvents: "none",
            opacity: "0.4",
        }

        if (isGamePaused) {
            return paused;
        } else {
            return notPaused;
        }
    }

    return (
        <div style={getStyle()}>
            <div className={revealedCell ? 'cellNumberRevealed' : 'cellNumber'} onContextMenu={onContextMenu} onMouseDown={mouseDownHandler} >
                {value}
                <div className={invalidCellNumber ? 'invalidCellNumber' : ''}></div>
            </div>
        </div>
    );
}

export default CellHasNumber;