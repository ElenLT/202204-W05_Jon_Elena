const array = [
  'spray',
  'limit',
  'elite',
  'exuberant',
  'destruction',
  'present',
];

const result = array.filter((item) => item.length > 6);

//---------------------

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]; //dentro de la funcion para exportarlo luego después

const filterMethod = (arr, cond) => {
  if (!Array.isArray(arr)) {
    // handle all invalid inputs and exceptions together
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
    let cond2 = arr[i] + cond;
    if (eval(cond2)) {
      newArray.push(arr[i]);
    }
  }
  return newArray;
};

console.log(filterMethod(arr, '> 6'));
