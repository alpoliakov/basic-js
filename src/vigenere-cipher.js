const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor(data) {
    this.data = data;
  }
  encrypt(message, key) {
    throw new CustomError('Not implemented');
    // remove line with error and write your code here
  }    
  decrypt(message, key) {
    throw new CustomError('Not implemented');
    // remove line with error and write your code here
  }
}

module.exports = VigenereCipheringMachine;
