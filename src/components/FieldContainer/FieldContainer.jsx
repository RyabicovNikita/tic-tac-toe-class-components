import { Component } from 'react';
import { WIN_PATTERNS } from '../../constants';
import { ACTIONS } from '../../services/actions';
import { connect } from 'react-redux';
import { selectCurrentPlayer, selectFields, selectIsGameEnded } from '../../services/selectors';

class FieldContainer extends Component {
	checkWinner = (newFields) => {
		let winnerMsg;
		if (WIN_PATTERNS.some((item) => item.every((i) => newFields[i] === 'X'))) {
			winnerMsg = 'Player X won!';
		} else if (WIN_PATTERNS.some((item) => item.every((i) => newFields[i] === '0'))) {
			winnerMsg = 'Player Y won!';
		} else if (newFields.every((item) => item !== '')) {
			winnerMsg = 'Game over. Draw!';
		}
		return winnerMsg;
	};
	handleClick(index) {
		const newFields = JSON.parse(JSON.stringify(this.props.fields));
		if (newFields[index] === '' && !this.props.isGameEnded) {
			newFields[index] = this.props.currentPlayer;
			this.props.dispatch({
				type: ACTIONS.UPDATE_FIELDS,
				payload: { fields: newFields },
			});
			this.props.dispatch({
				type: ACTIONS.CHANGE_CURRENT_PLAYER,
				payload: this.props.currentPlayer === 'X' ? '0' : 'X',
			});
			const winner = this.checkWinner(newFields);
			if (winner) this.props.dispatch({ type: ACTIONS.SHOW_WINNER, payload: winner });
		}
	}
	render() {
		return (
			<div className="w-500 p-10 bg-black flex items-center justify-center flex-wrap border-20 border-solid border-main-color rounded-2xl text-main-color">
				{this.props.fields?.length &&
					this.props.fields.map((item, index) => (
						<button
							key={index}
							className="w-2/6 h-40 text-center border-solid border-5 border-main-color cursor-pointer box-border"
							onClick={() => this.handleClick(index)}
						>
							{item}
						</button>
					))}
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		currentPlayer: selectCurrentPlayer(state),
		fields: selectFields(state),
		isGameEnded: selectIsGameEnded(state),
	};
};

export const Field = () => {
	const FieldConnect = connect(mapStateToProps)(FieldContainer);
	return <FieldConnect />;
};
