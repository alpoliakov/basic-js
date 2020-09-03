const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  // remove line with error and write your code here
  let count = 0;
  if(!Array.isArray(matrix) || matrix.length === 0) return count;
  for(let i = 0; i <= matrix.length; i++) {
    if(!Array.isArray(matrix[i]) && matrix[i] !== '^^') {
      continue;
    }else if(matrix[i] === '^^') {
      count =+ 1;
      continue;
    }else if (Array.isArray(matrix[i])) {
      matrix[i].forEach(item => {
        if(item === '^^') {
          count += 1
        }
      })
    }
  }
  return count;
};
