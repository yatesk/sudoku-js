function CheckBoxes({ showCandidatesToggle, setShowCandidatesToggle, hiddenSinglesToggle, setHiddenSinglesToggle, nakedSinglesToggle, setNakedSinglesToggle }) {
	return (
		<div>
      <label>
				<input type="checkbox" onChange={() => {setShowCandidatesToggle(!showCandidatesToggle)}} />
				Show Candidates
			</label>
			<label>
				<input type="checkbox" checked={nakedSinglesToggle} onChange={() => {setNakedSinglesToggle(!nakedSinglesToggle)}} />
				Show Naked Singles
			</label>
      <label>
				<input type="checkbox" checked={hiddenSinglesToggle} onChange={() => {setHiddenSinglesToggle(!hiddenSinglesToggle)}} />
				Show Hidden Singles
			</label>
		</div>
	);
}

export default CheckBoxes;