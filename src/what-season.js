const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  if(Object.prototype.toString.call(date) !== '[object Date]'||date===null){
  return 'Unable to determine the time of year!'
  }
  if(typeof date ==="string"){
    return 'Invalid date!'
  }
  const SEASONS = ['spring','summer',"autumn",'winter']
  //                2,3,4    5,6,7    8,9,10   11,0,1          
  let month
  month=date.getMonth()

  if(month>1&&month<5){
    return SEASONS[0]
  }else if(month>4&&month<8){
    return SEASONS[1]
  } else  if(month>7&&month<11){
    return SEASONS[2]
  } else return SEASONS[3]


  throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}

module.exports = {
  getSeason
};
