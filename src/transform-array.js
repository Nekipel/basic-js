const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  if (!Array.isArray(arr)) throw new Error('\'arr\' parameter must be an instance of the Array!');
  let copyArray = Array.from(arr);
  for (let i = 0; i < arr.length; i++) {
    switch (copyArray[i]){
      case '--double-next':
        if (i === arr.length - 1) copyArray.splice(i, 1);
        else if (copyArray[i + 2] === '--double-prev') copyArray.splice(i, 3, copyArray[i + 1], copyArray[i + 1], copyArray[i + 1]);
        else if (copyArray[i + 2] === '--discard-prev') copyArray.splice(i, 3, copyArray[i + 1]);
        else copyArray.splice(i, 1, copyArray[i + 1]);
        break;
      case '--discard-next':
        if (i === arr.length - 1) copyArray.splice(i, 1);
        else if (copyArray[i + 2] === '--double-prev' || '--discard-prev') copyArray.splice(i, 3);
        else copyArray.splice(i, 2);
        break;
      case '--double-prev':
        if (i === 0) copyArray.splice(i, 1);
        else copyArray.splice(i, 1, copyArray[i - 1]);
        break;
      case '--discard-prev':
        if (i === arr.length - 1) copyArray.splice(i, 1);
        if (i === 0) copyArray.splice(i, 1);
        else copyArray.splice(i - 1, 2);
        break;
    }
  }

  return copyArray;
}

module.exports = {
  transform
};
