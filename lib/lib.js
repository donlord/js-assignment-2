"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
const chooseRandom = exports.chooseRandom = (array, numItems) => {
  if (array === undefined) {
    return [];
  }
  if (array.length <= 2) {
    return array;
  }
  if (numItems > array.length || numItems === undefined) {
    numItems = Math.floor(Math.random() * array.length);
  }
  let indexArray = [];
  // Fill indexArray with random indices
  while (indexArray.length != numItems) {
    let randInt = Math.floor(Math.random() * array.length);
    if (indexArray.length === 0) {
      indexArray.push(randInt);
    }
    let inArray = false;
    // check to see if randomInt is in the indexed array, if so continue else add it to the indexArray
    for (let i = 0; i < indexArray.length; i++) {
      if (indexArray[i] === randInt) {
        inArray = true;
      }
    }
    if (inArray == false) {
      indexArray.push(randInt);
    }
  }
  // return the new array with the random values from indices indicated in indexArray
  let filteredArray = [];
  for (let i = 0; i < indexArray.length; i++) {
    filteredArray.push(array[indexArray[i]]);
  }
  return filteredArray;
};