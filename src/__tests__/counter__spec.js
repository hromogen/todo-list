import {counter, addCounter, removeCounter, incrementCounter} from '../lib';

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