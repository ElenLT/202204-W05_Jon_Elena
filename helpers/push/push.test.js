import { pushMethod } from './push';

describe('Given different inputs I expect different outputs', () => {
  // invalid input cases
  describe('When the arr is not an array', () => {
    test('Shoud capture the error', () => {
      expect(() => {
        pushMethod(undefined); // Both null and undefined work as inputs;
      }).toThrow(TypeError);
    });
    test('Shoud capture the error', () => {
      expect(() => {
        pushMethod('testing a string'); // Also 'number' or an object instance {} as inputs return the same error;
      }).toThrow(TypeError);
    });
  });

  // valid cases
  describe('When the array is empty and I push a bunch of N items', () => {
    test('Should return N and arr should have N items', () => {
      const arr = [];
      const inputOne = 'one';
      const inputTwo = 'two';
      const inputThree = 'three';
      const result = pushMethod(arr, inputOne, inputTwo, inputThree);
      console.log('result:', result, '> arr:', arr);
      expect(result).toBe(3);
    });
  });
  describe('When the array has N length and I push Y items', () => {
    test('Should return N + Y and arr should have N+Y items', () => {
      const arr = ['Paul', 'Leto'];
      const inputOne = 'Jessica';
      const inputTwo = 'Alia';
      const inputUndefined = undefined; // accepts all data types
      const result = pushMethod(arr, inputOne, inputTwo, inputUndefined);
      console.log('result:', result, ' > arr:', arr);
      expect(result).toBe(5);
    });
  });
  describe('When the array has N length and I push nothing', () => {
    test('Should return N and arr should have N+Y items', () => {
      const arr = ['Arrakis', 'Caladan'];
      const result = pushMethod(arr);
      console.log('result:', result, ' > arr:', arr);
      expect(result).toBe(2);
    });
  });
});
