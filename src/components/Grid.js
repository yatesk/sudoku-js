import React from "react";

import Cell from "./Cell.js"
import "../index.css";

function Grid({resetGame, puzzle, setPuzzle}) {

    function onClick(e) {
        // console.log('board clicked');
    }

    function updatePuzzle(gridID, value) {
        const newPuzzle = [...puzzle];
        newPuzzle[gridID] = value;

        setPuzzle(newPuzzle);
    }

    return (
        <div className='gameBoardGrid' onClick={onClick}>
            <Cell gridID={0} value={puzzle[0]} updatePuzzle={updatePuzzle}/>
            <Cell gridID={1} value={puzzle[1]} updatePuzzle={updatePuzzle}/>
            <Cell gridID={2} value={puzzle[2]} updatePuzzle={updatePuzzle}/>
            <Cell gridID={3} value={puzzle[3]} updatePuzzle={updatePuzzle}/>
            <Cell gridID={4} value={puzzle[4]} updatePuzzle={updatePuzzle}/>
            <Cell gridID={5} value={puzzle[5]} updatePuzzle={updatePuzzle}/>
            <Cell gridID={6} value={puzzle[6]} updatePuzzle={updatePuzzle}/>
            <Cell gridID={7} value={puzzle[7]} updatePuzzle={updatePuzzle}/>
            <Cell gridID={8} value={puzzle[8]} updatePuzzle={updatePuzzle}/>

            <Cell gridID={9} value={puzzle[9]} updatePuzzle={updatePuzzle}/>
            <Cell gridID={10} value={puzzle[10]} updatePuzzle={updatePuzzle}/>
            <Cell gridID={11} value={puzzle[11]} updatePuzzle={updatePuzzle}/>
            <Cell gridID={12} value={puzzle[12]} updatePuzzle={updatePuzzle}/>
            <Cell gridID={13} value={puzzle[13]} updatePuzzle={updatePuzzle}/>
            <Cell gridID={14} value={puzzle[14]} updatePuzzle={updatePuzzle}/>
            <Cell gridID={15} value={puzzle[15]} updatePuzzle={updatePuzzle}/>
            <Cell gridID={16} value={puzzle[16]} updatePuzzle={updatePuzzle}/>
            <Cell gridID={17} value={puzzle[17]} updatePuzzle={updatePuzzle}/>

            <Cell gridID={18} value={puzzle[18]} updatePuzzle={updatePuzzle}/>
            <Cell gridID={19} value={puzzle[19]} updatePuzzle={updatePuzzle}/>
            <Cell gridID={20} value={puzzle[20]} updatePuzzle={updatePuzzle}/>
            <Cell gridID={21} value={puzzle[21]} updatePuzzle={updatePuzzle}/>
            <Cell gridID={22} value={puzzle[22]} updatePuzzle={updatePuzzle}/>
            <Cell gridID={23} value={puzzle[23]} updatePuzzle={updatePuzzle}/>
            <Cell gridID={24} value={puzzle[24]} updatePuzzle={updatePuzzle}/>
            <Cell gridID={25} value={puzzle[25]} updatePuzzle={updatePuzzle}/>
            <Cell gridID={26} value={puzzle[26]} updatePuzzle={updatePuzzle}/>

            <Cell gridID={27} value={puzzle[27]} updatePuzzle={updatePuzzle}/>
            <Cell gridID={28} value={puzzle[28]} updatePuzzle={updatePuzzle}/>
            <Cell gridID={29} value={puzzle[29]} updatePuzzle={updatePuzzle}/>
            <Cell gridID={30} value={puzzle[30]} updatePuzzle={updatePuzzle}/>
            <Cell gridID={31} value={puzzle[31]} updatePuzzle={updatePuzzle}/>
            <Cell gridID={32} value={puzzle[32]} updatePuzzle={updatePuzzle}/>
            <Cell gridID={33} value={puzzle[33]} updatePuzzle={updatePuzzle}/>
            <Cell gridID={34} value={puzzle[34]} updatePuzzle={updatePuzzle}/>
            <Cell gridID={35} value={puzzle[35]} updatePuzzle={updatePuzzle}/>

            <Cell gridID={36} value={puzzle[36]} updatePuzzle={updatePuzzle}/>
            <Cell gridID={37} value={puzzle[37]} updatePuzzle={updatePuzzle}/>
            <Cell gridID={38} value={puzzle[38]} updatePuzzle={updatePuzzle}/>
            <Cell gridID={39} value={puzzle[39]} updatePuzzle={updatePuzzle}/>
            <Cell gridID={40} value={puzzle[40]} updatePuzzle={updatePuzzle}/>
            <Cell gridID={41} value={puzzle[41]} updatePuzzle={updatePuzzle}/>
            <Cell gridID={42} value={puzzle[42]} updatePuzzle={updatePuzzle}/>
            <Cell gridID={43} value={puzzle[43]} updatePuzzle={updatePuzzle}/>
            <Cell gridID={44} value={puzzle[44]} updatePuzzle={updatePuzzle}/>

            <Cell gridID={45} value={puzzle[45]} updatePuzzle={updatePuzzle}/>
            <Cell gridID={46} value={puzzle[46]} updatePuzzle={updatePuzzle}/>
            <Cell gridID={47} value={puzzle[47]} updatePuzzle={updatePuzzle}/>
            <Cell gridID={48} value={puzzle[48]} updatePuzzle={updatePuzzle}/>
            <Cell gridID={49} value={puzzle[49]} updatePuzzle={updatePuzzle}/>
            <Cell gridID={50} value={puzzle[50]} updatePuzzle={updatePuzzle}/>
            <Cell gridID={51} value={puzzle[51]} updatePuzzle={updatePuzzle}/>
            <Cell gridID={52} value={puzzle[52]} updatePuzzle={updatePuzzle}/>
            <Cell gridID={53} value={puzzle[53]} updatePuzzle={updatePuzzle}/>

            <Cell gridID={54} value={puzzle[54]} updatePuzzle={updatePuzzle}/>
            <Cell gridID={55} value={puzzle[55]} updatePuzzle={updatePuzzle}/>
            <Cell gridID={56} value={puzzle[56]} updatePuzzle={updatePuzzle}/>
            <Cell gridID={57} value={puzzle[57]} updatePuzzle={updatePuzzle}/>
            <Cell gridID={58} value={puzzle[58]} updatePuzzle={updatePuzzle}/>
            <Cell gridID={59} value={puzzle[59]} updatePuzzle={updatePuzzle}/>
            <Cell gridID={60} value={puzzle[69]} updatePuzzle={updatePuzzle}/>
            <Cell gridID={61} value={puzzle[61]} updatePuzzle={updatePuzzle}/>
            <Cell gridID={62} value={puzzle[62]} updatePuzzle={updatePuzzle}/>

            <Cell gridID={63} value={puzzle[63]} updatePuzzle={updatePuzzle}/>
            <Cell gridID={64} value={puzzle[64]} updatePuzzle={updatePuzzle}/>
            <Cell gridID={65} value={puzzle[65]} updatePuzzle={updatePuzzle}/>
            <Cell gridID={66} value={puzzle[66]} updatePuzzle={updatePuzzle}/>
            <Cell gridID={67} value={puzzle[67]} updatePuzzle={updatePuzzle}/>
            <Cell gridID={68} value={puzzle[68]} updatePuzzle={updatePuzzle}/>
            <Cell gridID={69} value={puzzle[69]} updatePuzzle={updatePuzzle}/>
            <Cell gridID={70} value={puzzle[70]} updatePuzzle={updatePuzzle}/>
            <Cell gridID={71} value={puzzle[71]} updatePuzzle={updatePuzzle}/>

            <Cell gridID={72} value={puzzle[72]} updatePuzzle={updatePuzzle}/>
            <Cell gridID={73} value={puzzle[73]} updatePuzzle={updatePuzzle}/>
            <Cell gridID={74} value={puzzle[74]} updatePuzzle={updatePuzzle}/>
            <Cell gridID={75} value={puzzle[75]} updatePuzzle={updatePuzzle}/>
            <Cell gridID={76} value={puzzle[76]} updatePuzzle={updatePuzzle}/>
            <Cell gridID={77} value={puzzle[77]} updatePuzzle={updatePuzzle}/>
            <Cell gridID={78} value={puzzle[78]} updatePuzzle={updatePuzzle}/>
            <Cell gridID={79} value={puzzle[79]} updatePuzzle={updatePuzzle}/>
            <Cell gridID={80} value={puzzle[80]} updatePuzzle={updatePuzzle}/>
        </div> 
    );
}

export default Grid;