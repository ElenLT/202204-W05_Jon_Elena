// shift()
// =======
// This method removes the first element from an array and returns that removed element.
// This method changes the length of the array.

export const shiftMethod = (arr) => {
  // handle invalid inputs
  // arr === null || arr === undefined || typeof arr !== 'object' || arr instanceof Array === false
  if (!Array.isArray(arr)) {
    console.log(
      `Invalid input: this function does not accept '${arr}' as input. Please add an array`
    );
    return;
  }
  // case: empty array
  if (arr.length === 0) {
    console.log('The array is empty');
    return undefined;
  }

  // case: array with single item
  if (arr.length === 1) {
    let output = arr[0];
    arr.length = 0;
    console.log('arr value afer after mutation', arr);
    return output;
  }

  // case: any other case.
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
