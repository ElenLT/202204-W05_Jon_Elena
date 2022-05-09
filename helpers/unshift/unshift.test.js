import { unshiftMethod } from './unshift';

describe('Given different inputs I expect different outputs', () => {
  // invalid input cases
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
  // describe('When the input is not an array and is undefined', () => {
  //   test('Shoud return nothing and print a console message', () => {
  //     const input = undefined;
  //     const result = shiftMethod(input);
  //     expect(result).toBe();
  //   });
  // });
  // describe('When the input is not an array and is a number', () => {
  //   test('Shoud return nothing and print a console message', () => {
  //     const input = 10042014;
  //     const result = shiftMethod(input);
  //     expect(result).toBe();
  //   });
  // });
  // describe('When the input is not an array and is a string', () => {
  //   test('Shoud return nothing and print a console message', () => {
  //     const input = "I'm a lonely string";
  //     const result = shiftMethod(input);
  //     expect(result).toBe();
  //   });
  // });
  // describe('When the input is not an array and is NaN', () => {
  //   test('Shoud return nothing and print a console message', () => {
  //     const input = NaN;
  //     const result = shiftMethod(input);
  //     expect(result).toBe();
  //   });
  // });

  // // valid cases
  // describe('When the input is an empty array', () => {
  //   test('Should return undefined', () => {
  //     const input = [];
  //     const result = shiftMethod(input);
  //     expect(result).toBe(undefined);
  //   });
  // });
  describe('When the input is one single item', () => {
    test('Should return the array length and print a console message ', () => {
      const arr = ['arr0'];
      const input = 'new item for the array';
      const result = unshiftMethod(arr, input);
      expect(result).toBe(2);
    });
  });
  describe('When the arr has three and the input is one single item', () => {
    test('Should return 4 and print a console message ', () => {
      const arr = ['arr0', 'arr1', 'arr2'];
      const input = 'get this item';
      const result = unshiftMethod(arr, input);
      expect(result).toBe(4);
    });
  });
  describe('When the arr has more than 1 element and the input is more than 1 item', () => {
    test('Should return the array length and print a console message ', () => {
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
  describe('When the arr has N elements and the input is empty', () => {
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
