//map()
//=====
//creates a new array populated with the results of calling a provided function on every element in the calling array.

export const mapMethod = (arr, modifyer) => {
  if (!Array.isArray(arr)) {
    const myTypeError = new TypeError();

    if (arr === null || arr === undefined) {
      myTypeError.message = `TypeError: Cannot read properties of '${arr}' (reading unshiftMethod)`;
      console.log(myTypeError);
      throw myTypeError.message;
    }

    if (
      arr instanceof Object === true ||
      typeof arr === 'number' ||
      typeof arr === 'string'
    ) {
      myTypeError.message = `TypeError: '${arr}' is not a function`;
      console.log(myTypeError);
      throw myTypeError.message;
    }
  }
  let newArray = [];

  for (let i = 0; i < arr.length; i++) {
    let mappedItem = arr[i] + modifyer;
    newArray.push(eval(mappedItem));
  }
  return newArray;
};
