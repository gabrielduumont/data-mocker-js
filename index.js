const Numbers = require('./sections/numbers');
const Strings = require('./sections/strings');

class DataMocker {
  constructor() {
    this.numbers = new Numbers();
    this.strings = new Strings();
  }
}

module.exports = DataMocker;