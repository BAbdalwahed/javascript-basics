const getNthElement = (index, array) => {
  return array[index%array.length];
};

const arrayToCSVString = array => {
  return array.join(',');
};

const csvStringToArray = string => {
  return string.split(',');
};

const addToArray = (element, array) => {
  array.push(element);
};

function addToArray2(element, array) {
  return array.concat(element);
}

const removeNthElement = (index, array) => {
  return array.splice(index, 1);
};

const numbersToStrings = numbers => {
  return numbers.toString().split(",");
};

const uppercaseWordsInArray = strings => {
  
};

const reverseWordsInArray = strings => {
  
};

const onlyEven = numbers => {
  
};

const removeNthElement2 = (index, array) => {
  
};

const elementsStartingWithAVowel = strings => {
  
};

const removeSpaces = string => {
  
};

const sumNumbers = numbers => {
  
};

const sortByLastLetter = strings => {
  
};

module.exports = {
  getNthElement,
  arrayToCSVString,
  csvStringToArray,
  addToArray,
  addToArray2,
  removeNthElement,
  numbersToStrings,
  uppercaseWordsInArray,
  reverseWordsInArray,
  onlyEven,
  removeNthElement2,
  elementsStartingWithAVowel,
  removeSpaces,
  sumNumbers,
  sortByLastLetter
};
