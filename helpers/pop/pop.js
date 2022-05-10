// pop():
// Removes the last element from an array and returns that element. This method changes the length of the array.

// Describe('Remove and return the last element of an array, mutating it')
// [].pop() => undefined // []
// ['a', 'b', 'c'].pop() => 'c' // ['a', 'b']
// [1, 2, {engineer: 'E'}].pop() => {engineer: 'E'} // [1, 2]

export const popMethod = (arr) => {
  if (!Array.isArray(arr)) {
    console.log(
      `Invalid input: this function does not accept '${arr}' as input. Please add an array`
    );
    return;
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
