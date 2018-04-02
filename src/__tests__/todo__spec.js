import {todos} from '../lib';

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