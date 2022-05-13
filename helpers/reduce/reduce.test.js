import { reduceMethod } from './reduce';

describe('Given different inputs I expect different outputs', () => {
  // invalid input cases
  describe('When the arr is not an array', () => {
    test('Shoud capture the error', () => {
      expect(() => {
        reduceMethod(undefined); // Both null and undefined work as inputs;
      }).toThrow(TypeError.message);
    });
    test('Shoud capture the error', () => {
      expect(() => {
        reduceMethod(33); // Also 'number' or an object instance {} as inputs return the same error;
      }).toThrow(TypeError.message);
    });
  });

  // valid cases
  describe('When the array is empty and exists an initial value (number)', () => {
    test('Should return the initial value', () => {
      const arr = [];
      const initialValue = 3;
      const result = reduceMethod(arr, initialValue);
      initialValue
        ? console.log(
            '> arr:',
            arr,
            'initialValue:',
            initialValue,
            'result:',
            result
          )
        : console.log('> arr:', arr, 'result:', result);
      expect(result).toEqual(3);
    });
  });
  describe("When the array has only one item and there's no initial value", () => {
    test('Should return the value of the single item in the arr', () => {
      const arr = [100410];
      const initialValue = false;
      const result = reduceMethod(arr);
      initialValue
        ? console.log(
            '> arr:',
            arr,
            'initialValue:',
            initialValue,
            'result:',
            result
          )
        : console.log('> arr:', arr, 'result:', result);
      expect(result).toEqual(100410);
    });
  });
  describe("When the array has only one item and there's an initial value", () => {
    test('Should return the value of the single item plus the initial value', () => {
      const arr = [27];
      const initialValue = 10;
      const result = reduceMethod(arr, initialValue);
      initialValue
        ? console.log(
            '> arr:',
            arr,
            'initialValue:',
            initialValue,
            'result:',
            result
          )
        : console.log('> arr:', arr, 'result:', result);
      expect(result).toBe(37);
    });
  });
  describe('When the array has many items (numbers) and no initial value', () => {
    test('Should return the sum of all the items in the arr', () => {
      const arr = [27, 4, 2010];
      const initialValue = null;
      const result = reduceMethod(arr);
      initialValue
        ? console.log(
            '> arr:',
            arr,
            'initialValue:',
            initialValue,
            'result:',
            result
          )
        : console.log('> arr:', arr, 'result:', result);
      expect(result).toBe(2041);
    });
  });
  describe('When the array has many items (numbers) and an initial value', () => {
    test('Should return the sum of all the items in the arr plus the initial value', () => {
      const arr = [27, 4, 2010];
      const initialValue = 1004;
      const result = reduceMethod(arr, initialValue);
      initialValue
        ? console.log(
            '> arr:',
            arr,
            'initialValue:',
            initialValue,
            'result:',
            result
          )
        : console.log('> arr:', arr, 'result:', result);
      expect(result).toBe(3045);
    });
  });
  describe('When the array has strings with or without initialValue', () => {
    test("Should concatenate strings if there's no initial value", () => {
      const arr = ['a', 'b', 'c'];
      const initialValue = null;
      const result = reduceMethod(arr);
      initialValue
        ? console.log(
            '> arr:',
            arr,
            'initialValue:',
            initialValue,
            'result:',
            result
          )
        : console.log('> arr:', arr, 'result:', result);
      expect(result).toBe('abc');
    });
    test('Should concatenate strings and the initial value', () => {
      const arr = ['b', 'c'];
      const initialValue = 'a';
      const result = reduceMethod(arr, initialValue);
      initialValue
        ? console.log(
            '> arr:',
            arr,
            'initialValue:',
            initialValue,
            'result:',
            result
          )
        : console.log('> arr:', arr, 'result:', result);
      expect(result).toEqual('abc'); // FIXME: This test is failing… but it works when tested in the js file
      // expect(result).toEqual('bc'); // Is returning 'bc' but only here. Not in the js file
    });
  });
  // describe('When the array has N length and I push Y items', () => {
  //   test('Should return N + Y and arr should have N+Y items', () => {
  //     const arr = ['Paul', 'Leto'];
  //     const inputOne = 'Jessica';
  //     const inputTwo = 'Alia';
  //     const inputUndefined = undefined; // accepts all data types
  //     const result = reduceMethod(arr, inputOne, inputTwo, inputUndefined);
  //     console.log('result:', result, ' > arr:', arr);
  //     expect(result).toBe(5);
  //   });
  // });
  // describe('When the array has N length and I push nothing', () => {
  //   test('Should return N and arr should have N+Y items', () => {
  //     const arr = ['Arrakis', 'Caladan'];
  //     const result = reduceMethod(arr);
  //     console.log('result:', result, ' > arr:', arr);
  //     expect(result).toBe(2);
  //   });
  // });
});
