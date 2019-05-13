import React, { memo } from 'react';
import PropTypes from 'prop-types';
import Todo from './Todo.jsx';
import style from './TodoList.css';

const TodoList = ({ todos, remove }) => (
	<ul className={style.root}>
		{todos.map(item => <Todo key={item.id} todo={item} remove={remove} />)}
	</ul>
);

TodoList.propTypes = {
	todos: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
	remove: PropTypes.func.isRequired
};

export default memo(TodoList);