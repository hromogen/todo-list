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

const FilterLink = ({filter, children}) => {
    return (
        <a href="#"
           onClick={e => {
               e.preventDefault();
               theStore.dispatch({
                   type: 'SET_VISIBILTY_FILTER',
                   filter })
           }
           }>
            {children}
        </a>
    );
};

const getVisibleTodos = (todos, filter) => {
    console.log('todos ', todos);
    console.log('filter ', filter);
    switch(filter){
        case 'SHOW_ALL':
            return todos;
        case 'SHOW_COMPLETED':
            return todos.filter(t => t.completed);
        case 'SHOW_ACTIVE':
            return todos.filer(t => !t.completed);
    }
};

export class TodoApp extends Component {
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
        const visibleTodos = getVisibleTodos(
            this.props.todos,
            this.props.visibilityFilter
        );
        return (
            <article className="todoList">
                <form action="" onSubmit={event => this.onSubmit(event)}>
                    <input ref={node => {this.input = node}} type="text"/>
                    <button type="submit">Add task</button>
                </form>
                <ul>
                    {
                        visibleTodos.map(
                            todo => todo.text ?
                                <li key={todo.id}
                                onClick={(event) => {
                                    event.preventDefault();
                                    theStore.dispatch({
                                        type: 'TOGGLE_TODO',
                                        id: todo.id
                                    })
                                }}
                                style={{textDecoration: todo.completed ? 'line-through' : 'none'}}>
                                    {todo.text}
                                </li> : "\n"
                            )
                    }
                </ul>
                <p>
                    Show:
                    {'  '}
                    <FilterLink filter='SHOW_ALL'>
                        All
                    </FilterLink>
                    {'  '}
                    <FilterLink filter='SHOW_ACTIVE'>
                        Active
                    </FilterLink>
                    {'  '}
                    <FilterLink filter='SHOW_COMPLETED'>
                        Completed
                    </FilterLink>
                </p>
            </article>
        );
    };
};