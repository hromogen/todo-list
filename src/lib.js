/*----------------------------------------------Counter set of functions-------------------------------------*/

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

/*----------------------------------------------Redux store set of functions------------------------------------*/

export const createStore = reducer => {
    const listeners = [],
        dispatch = action => {
            state = reducer(state, action);
            listeners.forEach( listener => listener() )
        };
    let state;
    dispatch({});
    return {
        getState: () => state,
        subscribe: listener => {
            listeners.push(listener);
            return () => listeners.filter(l => l !== listener)
        },
        dispatch: dispatch,
    }
};

/*----------------------------------------------Todo list set of functions----------------------------------------*/

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

export const todoApp = (state = {}, action) => {
    return {
        todos: todos(
            state.todos,
            action
        ),
        visibilityFilter: visibilityFilter(
            state.visibilityFilter,
            action
        )
    }
};

