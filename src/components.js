import React from 'react';
import { theStore } from './reducers';

const { Component } = React;
export const Counter = ({value, onIncrement, onDecrement}) => {
    return (
        <article className="counter">
            <h1>{value}</h1>
            <button onClick={onIncrement}>+</button>
            <button onClick={onDecrement}>-</button>
        </article>
    )
};

let todoCounter = 0;
export class TodoApp extends Component {
    constructor(props){
        super(props);
        this.state = {
            value: ''
        };
    }
    onSubmit(event) {
        event.preventDefault();
        theStore.dispatch({
            type: 'ADD_TODO',
            text: this.input.value,
            id: todoCounter++
        });
        this.input.value = '';
    };
    render(){
        return (
            <article className="todoList">
                <form action="" onSubmit={event => this.onSubmit(event)}>
                    <input ref={node => {this.input = node}} type="text"/>
                    <button type="submit">Add task</button>
                </form>
                <ul>
                    {
                        this.props.todos &&
                        this.props.todos.length &&
                        this.props.todos.map(todo => todo.text ? <li key={todo.id}>
                            {todo.text}
                            </li> : ""
                        )
                    }
                </ul>
            </article>
        );
    };
};