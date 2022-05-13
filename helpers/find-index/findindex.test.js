import { findIndexMethod } from './findindex';

describe('Given different inputs I expect different outputs', () => {
  describe("When the arr is not an array or there's a problem with the callback fn", () => {
    test('Shoud capture the error', () => {
      expect(() => {
        findIndexMethod(undefined); // Both null and undefined work as inputs;
      }).toThrow(TypeError);
    });
    test('Shoud capture the error', () => {
      expect(() => {
        findIndexMethod({}); // Also 'number' or 'string' as inputs return the same error;
      }).toThrow(TypeError);
    });
    // problems with the callback
    test("If it's empty should shoud throw a Type error", () => {
      expect(() => {
        findIndexMethod();
      }).toThrow(TypeError);
    });
  });
  describe('When we call it on an emtpy array', () => {
    test('Should return -1', () => {
      const arr = [];
      const callbackFn = (element) => element === 2;
      const result = findIndexMethod(arr, callbackFn);
      expect(result).toBe(-1);
    });
  });
  describe("When the array has not an item which pass the callback function's condition", () => {
    test('Should return 1', () => {
      const arr = [1, 3, 5, 7];
      const callbackFn = (element) => element % 2 === 0;
      const result = findIndexMethod(arr, callbackFn);
      expect(result).toBe(-1);
    });
  });
  describe("When the array has an item which pass the callback function's condition", () => {
    test('Should return the first item that passes the condition', () => {
      const arr = [0, 1, 3, 5, 7];
      const callbackFn = (element) => element % 2 === 1;
      const result = findIndexMethod(arr, callbackFn);
      expect(result).toBe(1);
    });
  });
});
