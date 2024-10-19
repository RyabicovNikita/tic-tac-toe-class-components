import styles from './Information.module.css';
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
	const playerInfo = <span className={styles['info__player']}>{currentPlayer}</span>;
	return (
		<>
			{!isGameEnded && <p className={styles['info']}>Player: {playerInfo}</p>}
			{isGameEnded && playerInfo}
		</>
	);
}
