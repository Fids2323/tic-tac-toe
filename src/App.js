import {useState} from "react";
import Layout from "./Layout";
import {STATUS, PLAYER} from "./constants";
import {handleCellClick, handleRestart} from "./handlers";
import {createEmptyField} from "./utils";

function App() {
	const [status, setStatus] = useState(STATUS.TURN);
	const [currentPlayer, setCurrentPlayer] = useState(PLAYER.CROSS);
	const [fieldArray, setFieldArray] = useState(createEmptyField());

	const state = {
		status,
		setStatus,
		currentPlayer,
		setCurrentPlayer,
		fieldArray,
		setFieldArray,
	};

	return (
		<Layout status={status} currentPlayer={currentPlayer} fieldArray={fieldArray} handleCellClick={(cellIndex) => handleCellClick(state, cellIndex)} handleRestart={() => handleRestart(state)} />
	);
}

export default App;
