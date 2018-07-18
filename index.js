'use strict';


const fatten = arr => {
  let newArr = [];
  if (!Array.isArray(arr)) {
    return [];
  }

  arr.forEach(item => {
    if (Array.isArray(item)) {
      newArr.push(...fatten(item));
    } else {
      newArr.push(item);
    }
  });
  return newArr;
};

console.log(fatten([ 1, 2, 3, [ 4 ], [ [ 6 ] ], [ { 1: 2 } ] ]));
