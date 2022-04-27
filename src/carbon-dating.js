const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(s) {
  let t
  if(!(!isNaN(parseFloat(s)) && isFinite(s))){
    return false
  }
  if(typeof s === "string"){
    if(s>15||s<1){
      return false
    }
    s = Number(s)
    return t = Math.ceil(HALF_LIFE_PERIOD*Math.log2(MODERN_ACTIVITY/s))

  } return false
  throw new NotImplementedError('Not implemented');
}


module.exports = {
  dateSample
};
