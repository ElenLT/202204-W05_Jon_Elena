describe('Given different inputs (an array expected) removes the last element from an array and returns that element (and mutates the array)', () => {
  // invalid input cases: Grouped because they all respond to the condition !Array.isArray(arr)
  describe('When the arr is not an array', () => {
    // TODO: Check this previous version, before the exception tests where implemented

    // test('Shoud return nothing and print a console message', () => {
    //   const inputNull = null;
    //   const result = popMethod(inputNull);
    //   expect(result).toBe();
    //   const inputUndefined = undefined;
    //   const resultB = popMethod(inputUndefined);
    //   expect(resultB).toBe();
    //   const inputNaN = NaN;
    //   const resultC = popMethod(inputNaN);
    //   expect(resultC).toBe();
    //   const inputNumber = 1004114;
    //   const resultD = popMethod(inputNumber);
    //   expect(resultD).toBe();
    //   const inputObject = {};
    //   const resultE = popMethod(inputObject);
    //   expect(resultE).toBe();
    // });

    describe('When the arr is not an array', () => {
      test('Shoud capture the error', () => {
        expect(() => {
          popMethod(undefined); // Both null and undefined work as inputs;
        }).toThrow(TypeError);
      });
      test('Shoud capture the error', () => {
        expect(() => {
          popMethod({}); // Also 'number' or 'string' as inputs return the same error;
        }).toThrow(TypeError);
      });
    });
  });
  describe('When the arr has a single item', () => {
    test('Should return the single item and print in the console the mutated arr', () => {
      const arr = ["I'm feeling lonely in the arr"];
      const result = popMethod(arr);
      expect(result).toEqual("I'm feeling lonely in the arr");
    });
  });
  describe('When the arr has a two or more items', () => {
    test('Should return last item and print in the console the mutated arr', () => {
      const arr = [0, 1, 2];
      const result = popMethod(arr);
      expect(result).toEqual(2);
    });
  });
});
