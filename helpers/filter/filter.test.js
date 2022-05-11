var newArray = arr.filter((item) => cond);

describe('Given different inputs I expect different outputs', () => {
  describe('When the arr is not an array', () => {
    test('Shoud capture the error', () => {
      expect(() => {
        //   filterMethod(undefined); // Both null and undefined work as inputs;
        // }).toThrow(
        //   TypeError(
        //     `TypeError: Cannot read properties of 'undefined' (reading filterMethod)`
        //   )
        // );
        filterMethod(undefined); // Both null and undefined work as inputs;
      }).toThrow(TypeError.message);
    });
    test('Shoud capture the error', () => {
      expect(() => {
        filterMethod({}); // Also 'number' or 'string' as inputs return the same error;
      }).toThrow(TypeError.message);
    });
  });

  describe('When the input is one single item', () => {
    test('Should return the arr length after being mutated (+1) and print in the console the mutated arr', () => {
      const arr = ["I'm feeling lonely in the arr"];
      const input = 'I want to join. But only in the [0] index position';
      const result = filterMethod(arr, input);
      expect(result).toBe(2);
      expect(arr).toEqual([
        'I want to join. But only in the [0] index position',
        "I'm feeling lonely in the arr",
      ]);
    });
  });
  describe('When the arr has three and the input is one single item', () => {
    test('Should return 4 and print a console message with the mutated arr', () => {
      const arr = ['arr0', 'arr1', 'arr2'];
      const input = 'New input item to unshift';
      const result = filterMethod(arr, input);
      expect(result).toBe(4);
    });
  });
  describe('When the arr has more than 1 element and the input is more than 1 item', () => {
    test('Should return the array length and print a console message with the mutated arr', () => {
      const arr = [4, 5, 6];
      const inputOne = 1;
      const inputTwo = 2;
      const inputThree = 3;
      const result = filterMethod(arr, inputOne, inputTwo, inputThree);
      expect(result).toBe(6);
    });
  });
  describe('When the arr is empty and the input is more than 1 item', () => {
    test('Should return the array length and print a console message ', () => {
      const arr = [];
      const inputOne = 1;
      const inputTwo = 2;
      const inputThree = 3;
      const result = filterMethod(arr, inputOne, inputTwo, inputThree);
      expect(result).toBe(3);
    });
  });
  describe('When the arr is empty and the input >1', () => {
    test('Should return the array length and print a console message ', () => {
      const arr = [];
      const inputOne = 1;
      const inputTwo = 2;
      const inputThree = 3;
      const result = filterMethod(arr, inputOne, inputTwo, inputThree);
      expect(result).toBe(3);
    });
  });
});
