const getRndNumber = (min = 0, max = 9) => {
  return (Math.random() * (max - min) ) + min;
}

const bigInt = () => {
  return Math.floor(getRndNumber(1000,100000));
}

const smallInt = () => {
  return Math.floor(getRndNumber());
}

const hugeInt = () => {
  return Math.floor(getRndNumber(1000000, 100000000));
}

const int = () => {
  return Math.floor(getRndNumber(0,100000000));
}

const bigDecimal = () => {
  return getRndNumber(1000,100000);
}

const smallDecimal = () => {
  return getRndNumber();
}

const smallestDecimal = () => {
  return getRndNumber(0,1);
}

const hugeDecimal = () => {
  return getRndNumber(1000000, 100000000);
}

const decimal = () => {
  return getRndNumber(0,100000000);
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