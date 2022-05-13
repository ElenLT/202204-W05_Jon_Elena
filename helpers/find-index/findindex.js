// findindex():
// method returns the index of the first element in the array that satisfies the provided testing function. Otherwise, it returns -1, indicating that no element passed the test.

export const findIndexMethod = (arr, callbackFn) => {
  if (!Array.isArray(arr)) {
    const myTypeError = new TypeError();

    if (
      arr instanceof Object === true ||
      typeof arr === 'number' ||
      typeof arr === 'string' ||
      !callbackFn
    ) {
      myTypeError.message = `TypeError: ${arr} is not a function`;
      console.log(myTypeError);
      throw myTypeError;
    }
  }

  for (let i = 0; i < arr.length; i++) {
    if (callbackFn(arr[i])) {
      return i;
    }
  }
  return -1;
};
