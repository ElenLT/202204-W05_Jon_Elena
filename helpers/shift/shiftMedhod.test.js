import { shiftMethod } from './shiftMedhod';

describe('Given different inputs I expect different outputs', () => {
  // invalid input cases
  describe('When the input is not an array and is a null', () => {
    test('Shoud return nothing and print a console message', () => {
      const input = null;
      const result = shiftMethod(input);
      expect(result).toBe();
    });
  });
  describe('When the input is not an array and is undefined', () => {
    test('Shoud return nothing and print a console message', () => {
      const input = undefined;
      const result = shiftMethod(input);
      expect(result).toBe();
    });
  });
  describe('When the input is not an array and is a number', () => {
    test('Shoud return nothing and print a console message', () => {
      const input = 10042014;
      const result = shiftMethod(input);
      expect(result).toBe();
    });
  });
  describe('When the input is not an array and is a string', () => {
    test('Shoud return nothing and print a console message', () => {
      const input = "I'm a lonely string";
      const result = shiftMethod(input);
      expect(result).toBe();
    });
  });
  describe('When the input is not an array and is NaN', () => {
    test('Shoud return nothing and print a console message', () => {
      const input = NaN;
      const result = shiftMethod(input);
      expect(result).toBe();
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

  // describe('When the element is NaN', () => {
  //   test('Should return false', () => {
  //     // Inputs
  //     const arr = arrayIsOk;
  //     const result = someFunction(arr, element);
  //     console.log(result);
  //     expect(result).toBe(false);
  //   });
  // });
});
