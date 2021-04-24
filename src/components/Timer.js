import React, { useEffect, useState } from "react";

import "../styles/Timer.css";

function Timer({ isGamePaused, isPuzzleCompleted, resetTimer, setResetTimer }) {
	const [totalSeconds, setTotalSeconds] = useState(0);

	function displayTime(totalSeconds) {
		let timeString = '0:00';
		if (totalSeconds > 0) {
			let tempTotalSeconds = totalSeconds;
			const hours = Math.floor(tempTotalSeconds / 3600);
			tempTotalSeconds %= 3600;

			const minutes = Math.floor(tempTotalSeconds / 60);
			tempTotalSeconds %= 60;
			
			const seconds = Math.floor(tempTotalSeconds); 

			if (hours > 0) {
				timeString = hours + ':';
			} else {
				timeString = '';
			}

			if (minutes > 0) {
				if (minutes < 10) {
					timeString += '0'
				}
				timeString += minutes + ':';
			} else {
				timeString += '0:';
			}

			if (seconds > 0) {
				if (seconds < 10) {
					timeString += '0';
				}
				timeString += seconds;
			} else {
				timeString += '00';
			}
		}

		// temp
		if (isGamePaused) {
			timeString += ' (PAUSED)';
		} else if (isPuzzleCompleted) {
			timeString += ' (Puzzle Completed!)';
		}

		return timeString;
	};

	useEffect(() => {
		if (resetTimer === true) {
			setTotalSeconds(0);
			setResetTimer(false);
		}
			
	}, [resetTimer]);

	useEffect(() => {
		const intervalID = setTimeout(() => {
			if(!isGamePaused && !isPuzzleCompleted) {
				setTotalSeconds(totalSeconds + 1);
			}
		}, 1000);

		return () => clearInterval(intervalID);
	});

	return (
		<div className="theTimer">
			{displayTime(totalSeconds)}
		</div>
	);
}

export default Timer;