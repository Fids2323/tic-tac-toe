import React from "react";
import {InformationLayout} from "./InformationLayout";
import {PLAYER, PLAYER_ACTION, PLAYER_NAME, STATUS} from "../../constants";
import PropTypes from "prop-types";

export const Information = ({status, currentPlayer}) => {
	const playerAction = PLAYER_ACTION[status];
	const playerName = PLAYER_NAME[currentPlayer];
	const information = status === STATUS.DRAW ? "Ничья" : `${playerAction} : ${playerName}`;
	return <InformationLayout information={information} />;
};

Information.propTypes = {
	status: PropTypes.oneOfType([STATUS.DRAW, STATUS.TURN, STATUS.WIN]),
	currentPlayer: PropTypes.oneOf([PLAYER.CROSS, PLAYER.NOUGHT, PLAYER.NOBODY]),
};
