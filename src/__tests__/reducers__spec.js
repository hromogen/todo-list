import {todos, counter, addCounter, removeCounter, incrementCounter} from '../reducers';

describe('counter', ()=> {
    test('INCREMENT function works', () => {
        expect(counter(0, {type: 'INCREMENT'})).toBe(1);
    });
    test('INCREMENT function works second time', () => {
        expect(counter(1, {type: 'INCREMENT'})).toBe(2);
    });
    test('DECREMENT function works', () => {
        expect(counter(2, {type: 'DECREMENT'})).toBe(1);
    });
    test('DECREMENT function works second time', () => {
        expect(counter(1, {type: 'DECREMENT'})).toBe(0);
    });
    test('with other meaning the function returns unchanged state', () => {
        expect(counter(1, {type: 'BLAHBLAHBLAH'})).toBe(1);
    });
    test('with an undefined first argument the function returns 0', () => {
        expect(counter(undefined, {})).toBe(0);
    });
});
/*--------------------------------------------------------------------------*/
describe('addCounter', ()=> {
    test('adds 0 to the end of input array', () => {
            const listBefore = [],
                listAfter = [0];
            Object.freeze(listBefore);
            expect(addCounter(listBefore)).toEqual(listAfter);
        });
});
/*--------------------------------------------------------------------------*/
describe('removeCounter', ()=> {
    test('returnes new array with removed item with given index ', () => {
        const listBefore = [0, 10, 20],
            listAfter = [0, 20];
        Object.freeze(listBefore);
        expect(removeCounter(listBefore, 1)).toEqual(listAfter);
    });
});
/*--------------------------------------------------------------------------*/
describe('incrementCounter', ()=> {
    test('returnes new array with added one to the array item with given index ', () => {
        const listBefore = [0, 10, 20],
            listAfter = [0, 11, 20];
        Object.freeze(listBefore);
        expect(incrementCounter(listBefore, 1)).toEqual(listAfter);
    });
});
describe('todos', ()=> {
    test('returns a new state array with added state with completed status put to be false', () => {
        const stateBefore = [],
            action = {
                id: 0,
                text: 'Learn Redux',
                type: 'ADD_TODO'
            },
            stateAfter = [
                {
                    id: 0,
                    text: 'Learn Redux',
                    completed: false
                }
            ];
        Object.freeze(...[action, stateBefore, stateAfter]);
        expect(todos(stateBefore, action)).toEqual(stateAfter);
    });
    test('can toggle the specific item of todo list with TOGGLE_TODO type of action', () => {
        const stateBefore = [
                {
                    id: 0,
                    text: 'Learn Redux',
                    completed: false
                },
                {
                    id: 1,
                    text: 'Learn React',
                    completed: false
                }
            ],
            action = {
                id: 1,
                type: 'TOGGLE_TODO'
            },
            stateAfter = [
                {
                    id: 0,
                    text: 'Learn Redux',
                    completed: false
                },
                {
                    id: 1,
                    text: 'Learn React',
                    completed: true
                }
            ];
        Object.freeze(...[action, stateBefore, stateAfter]);
        expect(todos(stateBefore, action)).toEqual(stateAfter);
    })
});