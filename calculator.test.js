import { add, minus, multiply, divide } from './calculator.js';

describe('Calculator Tests', () => {
  // 1. Test for addition
  test('it adds 1 and 1 and returns 2', () => {
    const param1 = 1;
    const param2 = 1;
    const expected = 2;
    expect(add(param1, param2)).toBe(expected);
  });

  // 2. Test for subtraction
  test('it subtracts 5 from 3 and returns -2', () => {
    const param1 = 3;
    const param2 = 5;
    const expected = -2;
    expect(minus(param1, param2)).toEqual(expected);
  });

  // 3. Test for multiplication
  test('it multiplies 3 by 4 and returns 12', () => {
    const param1 = 3;
    const param2 = 4;
    expect(multiply(param1, param2)).toBe(12);
  });

  // 4. Test for division
  test('it divides 10 by 2 and returns 5', () => {
    expect(divide(10, 2)).toBe(5);
  });

  // 5. Test for division by zero (should throw an exception)
  test('it throws an error when dividing by zero', () => {
    expect(() => divide(10, 0)).toThrow('Cannot divide by zero');
  });

  // 6. Test for floating-point precision issues (using toBeCloseTo)
  test('it divides 0.1 by 0.2 and returns approximately 0.5', () => {
    expect(divide(0.1, 0.2)).toBeCloseTo(0.5, 5);
  });

  // 7. Additional useful assertions
  test('it adds two numbers and returns a result greater than 5', () => {
    expect(add(3, 4)).toBeGreaterThan(5);
  });

  test('it subtracts two numbers and returns a result less than 0', () => {
    expect(minus(2, 5)).toBeLessThan(0);
  });

  test('it multiplies numbers and does not return null', () => {
    expect(multiply(3, 4)).not.toBeNull();
  });
});
