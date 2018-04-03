/*----------------------------------------------Counter set of functions-------------------------------------*/
import { combineReducers } from 'redux';
export const counter = (state = 0, action) => {
    switch (action.type){
        case 'INCREMENT':
            return state + 1;
        case 'DECREMENT':
            return state - 1;
        default:
            return state;
    }
};
export const addCounter = list => [ ...list, 0 ];

export const removeCounter = (list, index) => list.filter((_it, ind) => ind !== index);

export const incrementCounter = (list, index) => Array.from(list, (it, ind) => it += Number(ind === index));

const todo = (state = {}, action) => {
    switch(action.type){
        case 'ADD_TODO':
            return {id: action.id, text: action.text, completed: false};
        case 'TOGGLE_TODO':
            return (state.id === action.id) ? Object.assign({}, state, {completed: !state.completed}) : state;
        default:
            return state;
    }
};

export const todos = (state = [], action) => {
    switch(action.type){
        case 'ADD_TODO':
            return [...state, todo(undefined, action)];
        case 'TOGGLE_TODO':
            return state.map(st => todo(st, action));
        default:
            return state;
    }
};

/*---------------------------------------------------Filter reducer---------------------------------------------*/

export const visibilityFilter = ( state = 'SHOW_ALL', action ) => {
    switch(action.type){
        case 'SET_VISIBILITY_FILTER':
            return action.filter;
        default:
            return state;
    }
};


/*-------------------------------------------------Total app reducer----------------------------------------------*/

export const todoApp = combineReducers({
    todos,
    visibilityFilter
});