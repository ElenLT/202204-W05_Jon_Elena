// reduce():
// executes a user-supplied "reducer" callback function on each element of the array, in order, passing in the return value from the calculation on the preceding element. The final result of running the reducer across all elements of the array is a single value.

export const reduceMethod = (arr, initialValue) => {
  let result;

  // error handling variables
  const myTypeError = new TypeError();
  let hasNaN = false;

  // logic variables
  let previousValue = arr[0];
  let currentValue = arr[1];
  let currentIndex = 1;

  // if there's an initial value, the loop changes and so do the other values
  if (typeof initialValue === 'number' || typeof initialValue === 'string') {
    previousValue = initialValue;
    currentValue = arr[0];
    currentIndex = 0;
  }

  if (!Array.isArray(arr)) {
    if (arr === null || arr === undefined) {
      myTypeError.message = `TypeError: Cannot read properties of '${arr}' (reading pushMethod)`;
      // console.log(myTypeError);
      throw myTypeError.message;
    }

    if (
      arr instanceof Object === true ||
      typeof arr === 'number' ||
      typeof arr === 'string'
    ) {
      myTypeError.message = `TypeError: ${arr} is not a function`;
      // console.log(myTypeError);
      throw myTypeError.message;
    }
  }

  if (Array.isArray(arr)) {
    for (let i = currentIndex; i < arr.length; i++) {
      if (arr[i] !== null || arr[i] !== undefined) {
        currentValue = arr[i];
        result = previousValue + currentValue;
        // To validate and understand the WIP
        // console.log(
        //   `arr: ${arr} · previous: ${previousValue} · current: ${currentValue} · [i]: ${i} · result: ${result}  `
        // );
        previousValue += arr[i];
      }

      if (arr[i] === null || arr[i] === undefined) {
        hasNaN = true;
      }
    }

    // singular cases
    arr.length === 1 ? (result = arr[0]) : false;

    arr.length === 1 && initialValue ? (result = arr[0] + initialValue) : false;

    arr[0] === undefined ? (result = NaN) : false;

    arr[0] === null ? (result = 0) : false;

    // handle exception
    if (arr.length === 0 && !initialValue) {
      myTypeError.message =
        'TypeError: Reduce of empty array with no initial value';
      console.log(myTypeError.message);
      throw myTypeError.message;
    }

    // singular case. Should be called only if the exception is not triggered
    arr.length === 0 ? (result = initialValue) : false;
  }

  if (hasNaN) {
    return NaN;
  }
  return result;
};
