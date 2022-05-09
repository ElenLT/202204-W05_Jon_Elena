// unshift()
// =========
// Adds one or more elements to the beginning of an array and returns the new length of the array.

export const unshiftMethod = (arr, ...itemsToUnshift) => {
  // handle invalid inputs
  // arr === null || arr === undefined || typeof arr !== 'object' || arr instanceof Array === false
  if (!Array.isArray(arr)) {
    console.log(
      `Invalid input: this function does not work on '${arr}'. Please use a valid array`
    );
    return;
  }

  const arrTemp = [];
  arrTemp.length = arr.length + itemsToUnshift.length;
  console.log(arrTemp.length);

  for (let i = arr.length - 1; i >= 0; i--) {
    arrTemp[i + itemsToUnshift.length] = arr[i];
  }

  for (let j = itemsToUnshift.length - 1; j >= 0; j--) {
    arrTemp[j] = itemsToUnshift[j];
  }

  console.log('arrTemp after loops', arrTemp);
  arr = arrTemp;
  console.log('arr value afer after mutation', arr);

  return arr.length;
};
