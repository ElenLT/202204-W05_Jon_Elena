import { shiftMethod } from './shiftMedhod';

describe('Given different inputs I expect different outputs', () => {
  // invalid input cases
  describe('When the arr is not an array', () => {
    test('Shoud capture the error', () => {
      expect(() => {
        shiftMethod(undefined); // Both null and undefined work as inputs;
      }).toThrow(TypeError);
    });
    test('Shoud capture the error', () => {
      expect(() => {
        shiftMethod('testing a string'); // Also 'number' or an object instance {} as inputs return the same error;
      }).toThrow(TypeError);
    });
  });

  // valid cases
  describe('When the input is an empty array', () => {
    test('Should return undefined', () => {
      const input = [];
      const result = shiftMethod(input);
      expect(result).toBe(undefined);
    });
  });
  describe('When the input is an array with one single item', () => {
    test('Should return that item and mutate the array to be empty', () => {
      const input = ['lone star'];
      const result = shiftMethod(input);
      expect(result).toBe('lone star');
    });
  });
  describe('When the input is an array with a length of N', () => {
    test('Shoud return arr[0] and mutate the arr to a length of N-1', () => {
      const arr = ['Bach', 'Mozart'];
      const result = shiftMethod(arr);
      expect(result).toBe('Bach');
    });
  });
});
