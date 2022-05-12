import { mapMethod } from './map.js';

//var newArray = arr.filter((item) => cond);
describe('Given different inputs I expect different outputs', () => {
  describe('When the array is empty', () => {
    test('Should return an empty array', () => {
      const arr = [];
      const cond = '+ 6';
      const result = mapMethod(arr, cond);
      expect(result).toStrictEqual([]);
    });
  });
  describe('When there is no condition', () => {
    test('Should return the same array', () => {
      const arr = [1, 2, 3, 4, 7, 8, 9];
      const cond = '';
      const result = mapMethod(arr, cond);
      expect(result).toStrictEqual([1, 2, 3, 4, 7, 8, 9]);
    });
  });
  describe('When the arr needs to be muted', () => {
    test('Should return all the elements muted by the modifyer', () => {
      const arr = [1, 2, 3, 4, 5];
      const cond = '* 2';
      const result = mapMethod(arr, cond);
      expect(result).toStrictEqual([2, 4, 6, 8, 10]);
    });
  });
});
