import PropTypes from 'prop-types';
import { Field } from '../Field/Field';
import { InformationContainer } from '../Information/Information';

export const GameLayout = ({ dispatch }) => {
	const handleClick = () => {
		dispatch({
			type: 'RESTART_GAME',
		});
	};
	return (
		<div className="flex flex-col items-center" /* className={styles['tic-tac-toe']} */>
			<button
				className="btnStartNewGame bg-black text-main-color hover:btnStartNewGameHover"
				onClick={handleClick}
			>
				{'Start new game'}
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
