// shift()
// =======
// This method removes the first element from an array and returns that removed element.
// Shift changes the length of the array.

export const shiftMethod = (arr) => {
  // Handle invalid inputs

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
      myTypeError.messageIsNotAFunction = `TypeError: '${arr}' is not a function`;
      console.log(myTypeError);
      throw myTypeError;
    }
  }

  // Case: empty array
  if (arr.length === 0) {
    console.log('The array is empty');
    return undefined;
  }

  // Case: array with single item
  if (arr.length === 1) {
    let output = arr[0];
    arr.length = 0;
    console.log('arr value afer after mutation', arr);
    return output;
  }

  // Case: any other case.
  let arrTemp = [];
  arrTemp.length = arr.length - 1;

  for (let i = arr.length - 1; i >= 1; i--) {
    arrTemp[i - 1] = arr[i];
  }

  let shiftedItem = arr[0];
  console.log('arr value before mutation', arr);
  arr = arrTemp;
  console.log('arr value afer after mutation', arr);
  return shiftedItem;
};
