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

// 11opq
function findIndex(array, word) {
  let index = -1;
  for (let i = 0; i < array.length; i++) {
    if (array[i] !== word) {
      continue;
    } else {
      index = i;
      break;
    }
  }
  return index;
}

console.log(findIndex(['hello', 'world', 'search', 'good'], 'search'));
console.log(findIndex(['not', 'found'], 'search'));
console.log(findIndex(['hello', 'world', 'search', 'good', 'search'], 'search'));

// 11r
function removeEgg(foods) {
  const newFoods = [];

  for (let i = 0; i < foods.length; i++) {
    if (foods[i] === 'egg') {
      continue;
    }

    newFoods.push(foods[i]);
  }

  return newFoods;
}

console.log(removeEgg(['egg', 'apple', 'egg', 'egg', 'ham']));

// 11s
function removeFirstTwoEggs(foods) {
  const newFoods = [];
  let eggCounter = 0;

  for (let i = 0; i < foods.length; i++) {
    if (foods[i] === 'egg' && eggCounter < 2) {
      eggCounter++;
      continue;
    }

    newFoods.push(foods[i]);
  }

  return newFoods;
}

console.log(removeFirstTwoEggs(['egg', 'apple', 'egg', 'egg', 'ham']));

// 11tu
function removeLastTwoEggs(foods) {
  const reverseFoods = foods.slice().reverse();
  const newFoods = [];
  let eggCounter = 0;

  for (let i = 0; i < foods.length; i++) {
    if (reverseFoods[i] === 'egg' && eggCounter < 2) {
      eggCounter++;
      continue;
    }

    newFoods.push(reverseFoods[i]);
  }

  return newFoods.reverse();
}

const foods = ['egg', 'apple', 'egg', 'egg', 'ham'];
console.log(removeLastTwoEggs(foods));
console.log(foods);

// 11v
function fizzBuzz() {
  for (let i = 1; i <= 20; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log('FizzBuzz');
    } else if (i % 3 === 0) {
      console.log('Fizz');
    } else if (i % 5 === 0) {
      console.log('Buzz');
    }

    console.log(i);
  }
}

fizzBuzz();

// 11w, uses 11opq function findIndex(words, word);
function unique(words) {
  const uniqueWords = [];

  for (let i = 0; i < words.length; i++) {
    const index = findIndex(words, words[i]);
    if (words[i] === words[index] && index !== i) {
      // uniqueWords.splice(index, 1); removes word that has duplicate from uniqueWords
      continue;
    }
    
    uniqueWords.push(words[i]);
  }

  return uniqueWords;
}

console.log(unique(['green', 'red', 'blue', 'red']));
console.log(unique(['red', 'green', 'green', 'red']));

// 11x is in different files