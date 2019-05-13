import React, { memo } from 'react';
import PropTypes from 'prop-types';
import style from './Todo.css';

const Todo = ({ todo, remove }) =>
	<li className={style.root} onClick={() => remove(todo.id)}>{todo.text}</li>;

Todo.propTypes = {
	todo: PropTypes.object.isRequired,
	remove: PropTypes.func.isRequired
};

export default memo(Todo);