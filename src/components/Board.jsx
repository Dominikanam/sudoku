import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Title from './Title.jsx';
import styles from './Board.css';

export default class Board extends PureComponent {
	static propTypes = {
		current: PropTypes.arrayOf(PropTypes.string).isRequired,
		initial: PropTypes.arrayOf(PropTypes.string).isRequired,
		onChange: PropTypes.func.isRequired
	}

	render() {
		const { current, initial, onChange } = this.props;
		console.log(current);
		console.log(initial);

		return (
			<section className={styles.root}>
				{current.map((value, index) =>
					<Title
						index={index}
						key={index}
						value={value}
						onChange={onChange}
						disabled={Boolean(initial[index])} />
				)}
			</section>
		);
	}
}