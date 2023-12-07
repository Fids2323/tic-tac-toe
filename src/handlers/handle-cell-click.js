import {PLAYER, STATUS} from "../constants";
import {checkEmptyCell, checkWin} from "../utils";

export const handleCellClick = ({status, fieldArray, currentPlayer, setFieldArray, setStatus, setCurrentPlayer}, cellIndex) => {
	if (status === STATUS.WIN || status === STATUS.DRAW || fieldArray[cellIndex] !== PLAYER.NOBODY) {
		return;
	}
	const newField = [...fieldArray];
	newField[cellIndex] = currentPlayer;
	setFieldArray(newField);

	if (checkWin(newField, currentPlayer)) {
		setStatus(STATUS.WIN);
	} else if (checkEmptyCell(newField)) {
		setCurrentPlayer(currentPlayer === PLAYER.CROSS ? PLAYER.NOUGHT : PLAYER.CROSS);
	} else {
		setStatus(STATUS.DRAW);
	}
};
