const arrWithStrings = ['a', 'b', 'c'];
const array = [1, 1, 1000];
const arrayEmpty = [];
const initialValue = 0;

function callbackFn(previous, current, index) {
  const returns = previous + current;
  console.log(
    `array: ${array} · previous: ${previous} · current: ${current} · index: ${index} · returns: ${returns}`
  ); // iterates
  return returns;
}

console.log(`
`);

arrayEmpty.reduce(callbackFn, 1); // with previousValue
// arrayEmpty.reduce(callbackFn); // with previousValue

const myReduceFn = (arr, inVal) => {
  let result;
  let previousValue = arr[0];
  let currentValue = arr[1];
  let currentIndex = 1;
  if (typeof inVal === 'number') {
    previousValue = inVal;
    currentValue = arr[0];
    currentIndex = 0;
  }
  if (Array.isArray(arr)) {
    for (let i = currentIndex; i < arr.length; i++) {
      currentValue = arr[i];
      result = previousValue + currentValue;
      console.log(
        `arr: ${arr} · previous: ${previousValue} · current: ${currentValue} · 		[i]: ${i}   · result: ${result}  `
      );
      previousValue += arr[i];
    }
    arr.length === 1 ? (result = arr[0]) : false;
    arr[0] === undefined ? (result = NaN) : false;
    arr[0] === null ? (result = 0) : false;
    arr.length === 0 && !inVal
      ? console.log('TypeError: Reduce of empty array with no initial value')
      : false;
    arr.length === 0 ? (result = inVal) : false;
  }

  // TODO: If the array is empty and

  return result;
};

myReduceFn([], 1);
[].reduce(callbackFn, 1); // without previousValue
