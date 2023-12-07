import React from "react";
import styles from "./App.module.css";
import {Information, Field} from "./components";
import {PLAYER, STATUS} from "./constants";
import PropTypes from "prop-types";

const Layout = ({status, currentPlayer, fieldArray, handleCellClick, handleRestart}) => {
	return (
		<div className={styles.App}>
			<Information status={status} currentPlayer={currentPlayer} />
			<Field fieldArray={fieldArray} handleCellClick={handleCellClick} />
			<button className={styles.restartButton} onClick={handleRestart}>
				Restart
			</button>
		</div>
	);
};

export default Layout;

Layout.propTypes = {
	status: PropTypes.oneOfType([STATUS.DRAW, STATUS.TURN, STATUS.WIN]),
	currentPlayer: PropTypes.oneOf([PLAYER.CROSS, PLAYER.NOUGHT, PLAYER.NOBODY]),
	fieldArray: PropTypes.arrayOf(PropTypes.oneOf([PLAYER.CROSS, PLAYER.NOBODY, PLAYER.NOUGHT])),
	handleCellClick: PropTypes.func,
	handleRestart: PropTypes.func,
};
