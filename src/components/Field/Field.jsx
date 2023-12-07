import React from "react";
import {FieldLayout} from "./FieldLayout";
import PropTypes from "prop-types";
import {PLAYER} from "../../constants";

export const Field = ({fieldArray, handleCellClick}) => {
	return <FieldLayout field={fieldArray} handleCellClick={handleCellClick} />;
};

Field.propTypes = {
	fieldArray: PropTypes.arrayOf(PropTypes.oneOf([PLAYER.CROSS, PLAYER.NOBODY, PLAYER.NOUGHT])),
	handleCellClick: PropTypes.func,
};
