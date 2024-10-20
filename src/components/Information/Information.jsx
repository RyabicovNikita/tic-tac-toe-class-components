import { selectCurrentPlayer, selectIsGameEnded } from '../../services/selectors';
import { connect } from 'react-redux';

export function InformationContainer() {
	const mapStateToProps = (state) => ({
		currentPlayer: selectCurrentPlayer(state),
		isGameEnded: selectIsGameEnded(state),
	});
	const Information = connect(mapStateToProps)(InformationLayout);
	return <Information />;
}

function InformationLayout({ currentPlayer, isGameEnded }) {
	const playerInfo = <span className="text-black">{currentPlayer}</span>;
	return (
		<>
			{!isGameEnded && <p className="p-0 m-0 text-center">Player: {playerInfo}</p>}
			{isGameEnded && playerInfo}
		</>
	);
}
