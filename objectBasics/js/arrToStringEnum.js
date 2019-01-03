const arr5 = ["one", "two", "three", "four", "five"];
const arr2 = ["one", "two"];
const arr1 = ["one"];
const arr0 = [];

const arrToString = arr => {
  const arrCopy = [...arr]; //copy array
  const last = arrCopy.pop(); // pop last value
  return arr.length > 1
    ? `${arrCopy.join(", ")} and ${last}.`
    : arr.length
    ? `${last}.`
    : "";
};

// console.log(arrToString(arr5));
