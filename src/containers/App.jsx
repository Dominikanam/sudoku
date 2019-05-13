import React, { PureComponent } from 'react';
import uuid from 'uuid';
import { hot } from 'react-hot-loader';
import Title from '../components/Title.jsx';
import TodoList from '../components/TodoList.jsx';
import TodoForm from '../components/TodoForm.jsx';
import todos from '../data/todoList';
import style from './App.css';

class App extends PureComponent {
    constructor(props){
        super(props);

		this.state = {
            data: todos
		};

		this.removeTodo = this.removeTodo.bind(this);
		this.addTodo = this.addTodo.bind(this);
    }

	addTodo(val){
        const todo = {
            text: val,
            id: uuid.v4(),
        };
        const data = [...this.state.data, todo];
        this.setState({data});
	}

	removeTodo(id) {
		const remainder = this.state.data.filter(todo => todo.id !== id);
		this.setState({data: remainder});
	}

	render() {
		return (
			<div className={style.TodoApp}>
				<Title title={`To do: ${this.state.data.length}`} />
				<TodoList todos={this.state.data} remove={this.removeTodo} />
				<TodoForm onAdd={this.addTodo} />
			</div>
		);
	}
}

export default hot(module)(App);