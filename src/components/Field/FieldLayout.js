import {PLAYER, PLAYER_SIGN} from "../../constants";
import styles from "./Field.module.css";
import PropTypes from "prop-types";

export const FieldLayout = ({field, handleCellClick}) => (
	<div className={styles.field}>
		{field.map((cellPlayer, index) => (
			<button key={index} className={styles.cell} onClick={() => handleCellClick(index)}>
				{PLAYER_SIGN[cellPlayer]}
			</button>
		))}
	</div>
);

FieldLayout.propTypes = {
	field: PropTypes.arrayOf(PropTypes.oneOf([PLAYER.CROSS, PLAYER.NOBODY, PLAYER.NOUGHT])),
	handleCellClick: PropTypes.func,
};
