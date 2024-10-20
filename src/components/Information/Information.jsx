import { Component } from 'react';
import { selectCurrentPlayer, selectIsGameEnded } from '../../services/selectors';
import { connect } from 'react-redux';

class InformationLayout extends Component {
	render() {
		const playerInfo = <span className="text-black">{this.props.currentPlayer}</span>;
		return (
			<>
				{!this.props.isGameEnded && <p className="p-0 m-0 text-center">Player: {playerInfo}</p>}
				{this.props.isGameEnded && playerInfo}
			</>
		);
	}
}

const mapStateToProps = (state) => ({
	currentPlayer: selectCurrentPlayer(state),
	isGameEnded: selectIsGameEnded(state),
});

export const InformationContainer = connect(mapStateToProps)(InformationLayout);
