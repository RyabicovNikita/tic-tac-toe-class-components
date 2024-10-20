import { Component } from 'react';
import { connect } from 'react-redux';
import { InformationContainer } from './components/Information/Information';
import { Field } from './components/FieldContainer/FieldContainer';
import PropTypes from 'prop-types';
class GameLayout extends Component {
	constructor(props) {
		super(props);
		const { dispatch } = props;
		this.dispatch = dispatch;
	}
	handleClick = () => {
		this.dispatch({
			type: 'RESTART_GAME',
		});
	};
	render() {
		return (
			<div className="flex flex-col items-center">
				<button
					className="btnStartNewGame bg-black text-main-color hover:btnStartNewGameHover"
					onClick={this.handleClick}
				>
					{'Start new game'}
				</button>
				<InformationContainer />
				<Field />
			</div>
		);
	}
}

GameLayout.propTypes = {
	fields: PropTypes.array,
	currentPlayer: PropTypes.string,
	isGameEnded: PropTypes.bool,
	startNewGame: PropTypes.func,
};

export const Game = connect()(GameLayout);
