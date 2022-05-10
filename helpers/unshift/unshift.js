// unshift()
// =========
// Adds one or more elements to the beginning of an array and returns the new length of the array.

export const unshiftMethod = (arr, ...itemsToUnshift) => {
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

  const arrTemp = [];
  arrTemp.length = arr.length + itemsToUnshift.length;

  // add the arr content at the end of the temporary array
  for (let i = arr.length - 1; i >= 0; i--) {
    arrTemp[i + itemsToUnshift.length] = arr[i];
  }

  // add the items at the begining of the arr
  for (let j = itemsToUnshift.length - 1; j >= 0; j--) {
    arrTemp[j] = itemsToUnshift[j];
  }

  // console.log('arrTemp after loops', arrTemp);
  arr = arrTemp;
  console.log('arr value afer after mutation', arr);

  return arr.length;
};
