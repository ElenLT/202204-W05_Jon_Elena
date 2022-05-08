import { someFunction } from './some';

// TEST CASES
const arrayIsOk = [1, 2, 3];
const testArrIsEmpty = [];
const testElementIsNull = [null];
const IsNotAnArrIsUndefined = undefined;
const IsNotAnArrIsNumber = 1;
const IsNotAnArrIsString = 'hello';

describe('Give different inputs I expect differen outputs', () => {
  // true cases
  describe('When I pass an array with items and try finding an element which is included', () => {
    test('Should return true', () => {
      // Inputs
      const arr = arrayIsOk;
      const element = 2;
      const result = someFunction(arr, element);
      expect(result).toBe(true);
    });
  });
  describe('When I pass an array with items and try finding an element which is not included', () => {
    test('Should return false', () => {
      // Inputs
      const arr = arrayIsOk;
      const element = 4;
      const result = someFunction(arr, element);
      expect(result).toBe(false);
    });
  });
});
