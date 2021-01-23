import React from "react";

import "../index.css";

function Cell({value, disableBoard, onClick}) {
    return (
        <input type="button" className='cell' disabled={disableBoard} value={value} onClick={onClick}/> 
    );
}

export default Cell;