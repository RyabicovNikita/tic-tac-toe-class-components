import { connect } from 'react-redux';
import { GameLayout } from './components/GameLayout/GameLayout';
const Game = () => {
	const GameConnect = connect()(GameLayout);
	return <GameConnect />;
};

export default Game;
