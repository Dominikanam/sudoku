import React, { PureComponent } from 'react';
import { hot } from 'react-hot-loader';
import Sudoku from 'sudoku-umd';
import Board from '../components/Board.jsx';
import Status from '../components/Status.jsx';
import style from './App.css';

class App extends PureComponent {
    constructor(props){
        super(props);

		this.state = {
			initialBoard: [],
			board: [],
			check: false,
			correct: false
		};

		this.newGame = this.newGame.bind(this);
		this.reset = this.reset.bind(this);
		this.solve = this.solve.bind(this);
		this.check = this.check.bind(this);
		this.onChange = this.onChange.bind(this);
	}

	componentDidMount() {
		this.newGame();
	}

	convertToArray(string) {
		return string.split('').map(value => value === '.' ? '' : value);
	}

	convertToString(array) {
		return array.map(value => value || '.').join('');
	}

	reset() {
		this.setState({
			board: this.state.initialBoard,
			check: false
		});
	}

	solve() {
		const solved = Sudoku.solve(this.convertToString(this.state.board));

		if (!solved)
			return;

		this.setState({
			board: this.convertToArray(solved),
			check: false
		});
	}

	check() {
		this.setState({
			check: true,
			correct: Boolean(Sudoku.solve(this.convertToString(this.state.board)))
		});
	}

	newGame() {
		const board = this.convertToArray(Sudoku.generate(70));
		this.setState({
			board,
			check: false,
			initialBoard: board
		});
	}

	onChange(selectedIndex, newValue) {
		this.setState({
			board: this.state.board.map((value, index) =>
				index === selectedIndex ? newValue : value),
			check: false
		});
	}

	render() {
		const { initialBoard, board, check, correct } = this.state;

		return (
			<section className={style.root}>
				<h1>Sudoku</h1>

				{board.length > 0
					&& <Board
						current={board}
						initial={initialBoard}
						onChange={this.onChange} />}

				{check && <Status correct={correct} />}

				<div className={style.buttons}>
					<button onClick={this.check}>Check</button>
					<button onClick={this.newGame}>New Game</button>
					<button onClick={this.solve}>Solve</button>
					<button onClick={this.reset}>Restart</button>
				</div>
			</section>
		);
	}
}

export default hot(module)(App);