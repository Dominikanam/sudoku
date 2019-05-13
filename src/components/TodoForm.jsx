import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

export default class TodoForm extends PureComponent {
	static propTypes = {
		onAdd: PropTypes.func.isRequired
	}

	constructor(props) {
		super(props);
		this.state = {
			text: ''
		};
		this.onTextChange = this.onTextChange.bind(this);
		this.onAdd = this.onAdd.bind(this);
	}

	onTextChange(event) {
		this.setState({ text: event.target.value });
	}

	onAdd() {
		const value = this.state.text && this.state.text.trim();

		if(!value) {
			return;
		}

		this.props.onAdd(value);
		this.setState({ text: '' });
	}

	render() {
		return (
			<div>
				<input
					type="text"
					placeholder="What do you need to do?"
					value={this.state.text}
					onChange={this.onTextChange}
				/>
				<button
					onClick={this.onAdd}
				>
					Add
				</button>
			</div>
		)
	}
}