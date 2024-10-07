import { add } from './calculator.js';

test('It adds 1 and 2 and gets 3 as a result', () => {
  expect(add(1, 2)).toEqual(3);
});
