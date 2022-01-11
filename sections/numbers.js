const bigInt = () => {
  return Math.floor((Math.random() + 1000) * 10);
}

const smallInt = () => {
  return Math.floor((Math.random()) * 10);
}

const hugeInt = () => {
  return Math.floor((Math.random() + 1000000) * 10);
}

const int = () => {
  return Math.floor((Math.random()) * 1000000);
}

const bigDecimal = () => {
  return ((Math.random() + 1000) * 10);
}

const smallDecimal = () => {
  return ((Math.random()) * 10);
}

const smallestDecimal = () => {
  return ((Math.random()));
}

const hugeDecimal = () => {
  return ((Math.random() + 1000000) * 10);
}

const decimal = () => {
  return ((Math.random()) * 1000000);
}

class DMNumbers {
  constructor() {
    this.bigInt = bigInt;
    this.smallInt = smallInt;
    this.hugeInt = hugeInt;
    this.int = int;
    this.bigDecimal = bigDecimal;
    this.smallDecimal = smallDecimal;
    this.smallestDecimal = smallestDecimal;
    this.hugeDecimal = hugeDecimal;
    this.decimal = decimal;
  }
}

module.exports = DMNumbers;