import React from 'react';
//import { counter, addCounter, removeCounter, incrementCounter } from './reducers';
import { TodoApp } from './components';
import ReactDOM from 'react-dom';
import {theStore} from './reducers';
import './index.css';

const render = () => {
    ReactDOM.render(
        <TodoApp
            todos = {theStore.getState().todos}
        />,
        document.getElementById('root')
    )
};

theStore.subscribe(render);
render();