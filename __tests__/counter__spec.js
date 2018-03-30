const counter = require('../src/counter');

test('counter INCREMENT function works', () => {
    counter(0, {type: 'INCREMENT'}).toBe(1)
});
test('counter INCREMENT function works second time', () => {
    counter(1, {type: 'INCREMENT'}).toBe(2)
});
test('counter DECREMENT function works second time', () => {
    counter(2, {type: 'DECREMENT'}).toBe(1)
});
test('counter DECREMENT function works second time', () => {
    counter(1, {type: 'DECREMENT'}).toBe(0)
});