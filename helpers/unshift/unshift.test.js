import { unshiftMethod } from './unshift';

describe('Given different inputs I expect different outputs', () => {
  // invalid input cases
  // they all respond to the condition !Array.isArray(arr)
  describe('When the arr is not an array', () => {
    test('Shoud return nothing and print a console message', () => {
      const inputNull = null;
      const result = unshiftMethod(inputNull);
      expect(result).toBe();
      const inputUndefined = undefined;
      const resultB = unshiftMethod(inputUndefined);
      expect(resultB).toBe();
      const inputNaN = NaN;
      const resultC = unshiftMethod(inputNaN);
      expect(resultC).toBe();
      const inputNumber = 1004114;
      const resultD = unshiftMethod(inputNumber);
      expect(resultD).toBe();
      const inputObject = {};
      const resultE = unshiftMethod(inputObject);
      expect(resultE).toBe();
    });
  });
  describe('When the input is one single item', () => {
    test('Should return the arr length after being mutated (+1) and print in the console the mutated arr', () => {
      const arr = ["I'm feeling lonely in the arr"];
      const input = 'I want to join. But only in the [0] index position';
      const result = unshiftMethod(arr, input);
      expect(result).toBe(2);
    });
  });
  describe('When the arr has three and the input is one single item', () => {
    test('Should return 4 and print a console message with the mutated arr', () => {
      const arr = ['arr0', 'arr1', 'arr2'];
      const input = 'New input item to unshift';
      const result = unshiftMethod(arr, input);
      expect(result).toBe(4);
    });
  });
  describe('When the arr has more than 1 element and the input is more than 1 item', () => {
    test('Should return the array length and print a console message with the mutated arr', () => {
      const arr = [4, 5, 6];
      const inputOne = 1;
      const inputTwo = 2;
      const inputThree = 3;
      const result = unshiftMethod(arr, inputOne, inputTwo, inputThree);
      expect(result).toBe(6);
    });
  });
  describe('When the arr is empty and the input is more than 1 item', () => {
    test('Should return the array length and print a console message ', () => {
      const arr = [];
      const inputOne = 1;
      const inputTwo = 2;
      const inputThree = 3;
      const result = unshiftMethod(arr, inputOne, inputTwo, inputThree);
      expect(result).toBe(3);
    });
  });
  describe('When the arr is empty and the input >1', () => {
    test('Should return the array length and print a console message ', () => {
      const arr = [];
      const inputOne = 1;
      const inputTwo = 2;
      const inputThree = 3;
      const result = unshiftMethod(arr, inputOne, inputTwo, inputThree);
      expect(result).toBe(3);
    });
  });
});
