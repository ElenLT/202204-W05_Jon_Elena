const arrWithStrings = ['b', 'c'];
const array = [1];
const arrayEmpty = [];
let initialValue = 0;

function callbackFn(previous, current, index) {
  const returns = previous + current;
  console.log(
    `array: ${array} · previous: ${previous} · current: ${current} · index: ${index} · returns: ${returns}`
  ); // iterates
  console.log(returns);
  return returns;
}

// arrayEmpty.reduce(callbackFn, 1); // with previousValue
// arrayEmpty.reduce(callbackFn); // with previousValue

export const reduceMethod = (arr, initialValue) => {
  let result;
  const myTypeError = new TypeError();

  let previousValue = arr[0];
  let currentValue = arr[1];
  let currentIndex = 1;

  // if there's an initial value, the loop changes and so do the other values
  if (typeof initialValue === 'number') {
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
      currentValue = arr[i];
      result = previousValue + currentValue;
      // console.log(
      //   `arr: ${arr} · previous: ${previousValue} · current: ${currentValue} · [i]: ${i} · result: ${result}  `
      // );
      previousValue += arr[i];
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
      throw myTypeError.message;
    }

    // singular case. Should be called only if the exception is not triggered
    arr.length === 0 ? (result = initialValue) : false;
  }

  return result;
};

// console.log(reduceMethod(array));
// console.log(reduceMethod(array, 1));

initialValue = 'a';
console.log(reduceMethod(arrWithStrings, initialValue));
console.log(arrWithStrings.reduce(callbackFn, initialValue));
// console.log(``);
// arrWithStrings.reduce(callbackFn, 1); // without previousValue
