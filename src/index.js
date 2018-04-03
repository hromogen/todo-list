import React from 'react';
import {counter, createStore, addCounter, removeCounter, incrementCounter} from './lib';
//import {  } from 'redux';
import ReactDOM from 'react-dom';
import './index.css';

const store = createStore(counter);
const Counter = ({value, onIncrement, onDecrement}) => {
    return (
        <article className="counter">
            <h1>{value}</h1>
            <button onClick={onIncrement}>+</button>
            <button onClick={onDecrement}>-</button>
        </article>
    )
};

const render = () => {
    ReactDOM.render(
        <Counter
            value={store.getState()}
            onIncrement={() => store.dispatch({type: 'INCREMENT'})}
            onDecrement={() => store.dispatch({type: 'DECREMENT'})}
        />,
        document.getElementById('root')
    )
};

store.subscribe(render);
render();