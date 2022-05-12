//every()
//=======
//method tests whether all elements in the array pass the test implemented by the provided function. It returns a Boolean value.
// expected output: true

export const everyMethod = (arr, cond) => {
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

  for (let i = 0; i < arr.length; i++) {
    let cond2 = arr[i] + cond;
    if (eval(cond2)) {
      return true;
    } else {
      return false;
    }
  }
};
