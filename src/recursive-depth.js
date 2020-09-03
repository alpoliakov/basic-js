const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {

  calculateDepth( arr  ) {
    let count = 1;
    for (let i = 0; i < arr.length; i++) {
      let depth = 1;
      if (Array.isArray(arr[i])) {
        depth += this.calculateDepth(arr[i]);
        if (depth > count) {
          count = depth;
        };
      };
    };
    return count;
  }
};