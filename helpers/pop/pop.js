// pop():
// Removes the last element from an array and returns that element. This method changes the length of the array.

// Describe('Remove and return the last element of an array, mutating it')

export const popMethod = (arr) => {
  // TODO: Check previous version, before exceptions where implemented
  // if (!Array.isArray(arr)) {
  //   console.log(
  //     `Invalid input: this function does not accept '${arr}' as input. Please add an array`
  //   );
  //   return;
  // }

  // TODO: Do we need to implement try-catch?
  if (!Array.isArray(arr)) {
    // handle all invalid inputs and exceptions together

    const myTypeError = new TypeError();

    if (arr === null || arr === undefined) {
      myTypeError.messageUX = `TypeError: Cannot read properties of '${arr}' (reading unshiftMethod)`;
      console.log(myTypeError);
      throw myTypeError;
    }

    if (
      arr instanceof Object === true ||
      typeof arr === 'number' ||
      typeof arr === 'string'
    ) {
      myTypeError.messageIsNotAFunction = `TypeError: ${arr} is not a function`;
      console.log(myTypeError);
      throw myTypeError;
    }
  }

  if (arr.length === 0) {
    return undefined;
  }

  if (typeof arr === 'object') {
    let poppedItem = arr[arr.length - 1]; // to store the last item in the arr
    arr.length = arr.length - 1; // to eliminate the last item
    console.log(arr);
    return poppedItem;
  }
};
