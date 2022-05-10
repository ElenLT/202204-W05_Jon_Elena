// push():
// Adds one or more elements to the end of an array and returns the new length of the array.

export const pushMethod = (arr, ...toPush) => {
  if (!Array.isArray(arr)) {
    const myTypeError = new TypeError();

    if (arr === null || arr === undefined) {
      myTypeError.messageUX = `TypeError: Cannot read properties of '${arr}' (reading pushMethod)`;
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

  for (let item of toPush) {
    arr[arr.length] = item;
  }

  return arr.length;
};
