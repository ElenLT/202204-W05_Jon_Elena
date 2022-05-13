// push():
// Adds one or more elements to the end of an array and returns the new length of the array.

export const findMethod = (arr, callbackFn) => {
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

  for (let item of arr) {
    if (callbackFn(item)) {
      return item;
    }
  }
  return undefined;
};
