import { filterMethod } from './filter';

//var newArray = arr.filter((item) => cond);
describe('Given different inputs I expect different outputs', () => {
  describe('When the arr is not an array', () => {
    test('Shoud capture the error', () => {
      expect(() => {
        filterMethod(undefined); // Both null and undefined work as inputs;
      }).toThrow(TypeError.message);
    });
  });

  describe('When the array is empty', () => {
    test('Should return an empty array', () => {
      const arr = [];
      const cond = '> 6';
      const result = filterMethod(arr, cond);
      expect(result).toStrictEqual([]);
    });
  });
  describe('When none of the elements of the array matches the condition', () => {
    test('Should return an empty array', () => {
      const arr = [1, 2, 3, 4, 7, 8, 9];
      const cond = '=== 6';
      const result = filterMethod(arr, cond);
      expect(result).toStrictEqual([]);
    });
  });
  describe('When the arr has more than 1 element that match the condition', () => {
    test('Should return all the elements that match the condition', () => {
      const arr = [1, 2, 3, 4, 7, 8, 9];
      const cond = '> 4';
      const result = filterMethod(arr, cond);
      expect(result).toStrictEqual([7, 8, 9]);
    });
  });
  describe('When the condition is empty', () => {
    test('Should return an empty array', () => {
      const arr = [1, 2, 3, 4, 7, 8, 9];
      const cond = '';
      const result = filterMethod(arr, cond);
      expect(result).toStrictEqual([]);
    });
  });
});
