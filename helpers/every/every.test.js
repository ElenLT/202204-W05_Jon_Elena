import { everyMethod } from './every.js';

describe('Given different inputs (an array expected) removes the last element from an array and returns that element (and mutates the array)', () => {
  // invalid input cases: Grouped because they all respond to the condition !Array.isArray(arr)
  describe('When the arr is not an array', () => {
    test('Shoud capture the error', () => {
      expect(() => {
        everyMethod(undefined); // Both null and undefined work as inputs;
      }).toThrow(TypeError);
    });
    test('Shoud capture the error', () => {
      expect(() => {
        everyMethod({}); // Also 'number' or 'string' as inputs return the same error;
      }).toThrow(TypeError);
    });
  });
});
describe('When the arr has a two or more different items', () => {
  test('Should return last item and print in the console the mutated arr', () => {
    const arr = [0, 1, 2];
    const result = everyMethod(arr);
    expect(result).toEqual(2);
  });
});
