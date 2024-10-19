import PropTypes from 'prop-types';
import { Field } from '../Field/Field';
import { InformationContainer } from '../Information/Information';
import styles from './GameLayout.module.css';

export const GameLayout = ({ dispatch }) => {
	const handleClick = () => {
		dispatch({
			type: 'RESTART_GAME',
		});
	};
	return (
		<div className={styles['tic-tac-toe']}>
			<button className={styles.btnStartNewGame} onClick={handleClick}>
				Start new game
			</button>
			<InformationContainer />
			<Field />
		</div>
	);
};

GameLayout.propTypes = {
	fields: PropTypes.array,
	currentPlayer: PropTypes.string,
	isGameEnded: PropTypes.bool,
	startNewGame: PropTypes.func,
};
