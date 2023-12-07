import {PLAYER, STATUS} from "../constants";
import {createEmptyField} from "../utils";

export const handleRestart = ({setStatus, setCurrentPlayer, setFieldArray}) => {
	setStatus(STATUS.TURN);
	setCurrentPlayer(PLAYER.CROSS);
	setFieldArray(createEmptyField());
};
