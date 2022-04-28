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
function transform(/*arr*/) {
//   let newArr
//   try {
//     arr
//   } catch (e) {
//     if (!Array.isArray(arr)) {
//       "\'arr\' parameter must be an instance of the Array!"
//     }
//     // ... и т.д.
//   }
//   let answer = ['--discard-next','--double-next','--discard-next','--double-next']
//   // // let newArr
//   // if(!Array.isArray(arr)){
//   //   return "\'arr\' parameter must be an instance of the Array!"
//   //   // return "Invalid date!"
//   // }
// return newArr=arr.filter(
//   x=>{
//   if(x === answer[0]){
//     x+1 = 
//   }
//   })

  // for(let i=0;i<arr.length;i++){
  //   arr.map(x=>{
  //     if(2){

  //     }
  //   })
  // }
  throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}

module.exports = {
  transform
};
