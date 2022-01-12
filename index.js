const Numbers = require('./sections/numbers');
const Strings = require('./sections/strings');
const Names = require('./sections/names');

class DataMocker {
  constructor() {
    this.numbers = new Numbers();
    this.strings = new Strings();
    this.names = new Names();
  }
}

module.exports = DataMocker;