const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  let count = 0
  let arrNew =[]
  s1=s1.split("").sort((a,b)=>a-b)
  //a,a,b,c,c->a,a,b,c,c->[a,a,b,c,c]
  s2=s2.split("").sort((a,b)=>a-b)
  //a,d,c,a,a->a,a,c,d->[a,a,c,d]
  for(let i=0;i<s1.length;i++){
    if(!s1.length){
      break
    }
    for(let j=0;j<s2.length;j++){
      if(s1[i]===s2[j]){
        arrNew.push(s1[i]);
        // s1[i]="0"
        s2[j] ="0"
        break
      }
    }
  }
  return count =arrNew.length
}

module.exports = {
  getCommonCharacterCount
};
