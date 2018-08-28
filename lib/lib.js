"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
const chooseRandom = exports.chooseRandom = (array, numItems) => {
  // TODO check that array length is greater than 1
  if (array.length <= 2) {
    return array;
  }
  if (numItems > array.length) {
    numItems = Math.floor(Math.random() * array.length);
  }

  indexArray = [];
  //Fill indexArray with random indices
  while (indexArray.length != numItems) {
    randInt = Math.floor(Math.random() * array.length);
    if (indexArray.length === 0) {
      indexArray.push(randInt);
    }
    inArray = false;
    for (let i = 0; i < indexArray.length; i++) {
      if (indexArray[i] === randInt) {
        inArray = true;
      }
    }
    if (inArray == false) {
      indexArray.push(randInt);
    }
  }
  //return the new array with the random values from indices indicated in indexArray
  filteredArray = [];
  for (let i = 0; i < indexArray.length; i++) {
    filteredArray.push(array[indexArray[i]]);
  }
  return filteredArray;
};

// ray = [1,2]
// console.log(chooseRandom(ray,22))