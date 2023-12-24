// 11a
const nums = [10, 20, 30];
nums[2] = 99;

console.log(nums);

// 11b
function getLastValue(array) {
  return array[array.length - 1];
}

console.log(getLastValue([1, true, 'dang', [69, 420]]));

// 11c
function arraySwap(array) {
  let temp = array[0];
  array[0] = array[array.length - 1];
  array[array.length - 1] = temp;
  return array;  
}

console.log(arraySwap([1, 2, 3, 4, 5]));

// 11d
for (let i = 0; i < 11; i += 2) {
  console.log(i);
}

// 11e
for (let i = 0; i < 6; i++) {
  console.log(5 - i);
}

// 11fa
let index = 0;

while (index < 11) {
  console.log(index);
  index += 2;
}

// 11fb
index = 0;

while (index < 6) {
  console.log(5 - index);
  index++;
}

// 11gh
function addOne(array) {
  const newArray = [];

  for (let i = 0; i < array.length; i++) {
    newArray.push(array[i] + 1);
  }

  return newArray;
}

console.log(addOne([1, 2, 3]));

// 11i
function addNum(array, num) {
  const newArray = [];

  for (let i = 0; i < array.length; i++) {
    newArray.push(array[i] + num);
  }

  return newArray;
}

console.log(addNum([1, 2, 3], 2));

// 11j
function addArrays(array1, array2) {
  const newArray = [];

  for (let i = 0; i < array1.length; i++) {
    newArray.push(array1[i] + array2[i]);
  }

  return newArray;
}

console.log(addArrays([1, 1, 2], [1, 1, 3]));

// 11k
function countPositive(array) {
  const newArray = [];

  for (let i = 0; i < array.length; i++) {
    if (array[i] > 0) {
      newArray.push(array[i]);
    }
  }

  return newArray.length;
}

console.log(countPositive([-2, 3, -5, 7, 10]));

// 11lm
function minMax(array) {
  // linear short
  const result = {
    min: null,
    max: null
  };

  if (array.length === 0) {
    return result;
  } else {
    let sortedArray = array.slice();

    for (let i = 0; i < array.length; i++) {
      for (let j = i + 1; j < array.length; j++) {
        if (sortedArray[i] > sortedArray[j]) {
          let temp = sortedArray[j];
          sortedArray[j] = sortedArray[i];
          sortedArray[i] = temp;
        }
      }
    }

    result.min = sortedArray[0];
    result.max = sortedArray[sortedArray.length - 1];
    return result;
  }
}

console.log(minMax([-2, 3, -5, 7, 10]));
console.log(minMax([]));
console.log(minMax([3]));

// 11n
function countWords(words) {
  const wordList = {};
  for (let i = 0; i < words.length; i++) {
    if (!wordList[words[i]]) {
      wordList[words[i]] = 1;
    } else {
      wordList[words[i]] += 1;
    }
  }

  return wordList;
}

console.log(countWords(['apple', 'grape', 'apple', 'apple']));