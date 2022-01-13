# @gabrielduumont/data-mocker-js
v.1.2.0
Mock data generator. 
Fast development and testing for front-end tasks.

## Installing

Using npm:

```bash
$ npm install @gabrielduumont/data-mocker-js
```

Using yarn:

```bash
$ yarn add @gabrielduumont/data-mocker-js
```

## Usage

```js
const DataMocker = require('@gabrielduumont/data-mocker-js');
const dataMocker = new DataMocker();
// dataMocker.<method> will now provide autocomplete and parameter typings
```

### Numbers

```js
const DataMocker = require('@gabrielduumont/data-mocker-js');
// Instantiate the class
const dataMocker = new DataMocker();

// Get a random integer between 1000 and 100000
var bigInt = dataMocker.numbers.bigInt();

// Get a random integer between 0 and 10
var smallInt = dataMocker.numbers.smallInt();

// Get a random integer above 1000000
var hugeInt = dataMocker.numbers.hugeInt();

// Get a random integer between 0 and 1000000
var int = dataMocker.numbers.int();

// Get a random decimal between 1000 and 100000
var bigDecimal = dataMocker.numbers.bigDecimal();

// Get a random decimal between 0 and 10
var smallDecimal = dataMocker.numbers.smallDecimal();

// Get a random decimal between 0 and 1
var smallestDecimal = dataMocker.numbers.smallestDecimal();

// Get a random decimal between above 1000000
var hugeDecimal = dataMocker.numbers.hugeDecimal();

// Get a random decimal between 0 and 1000000
var decimal = dataMocker.numbers.decimal();

```

### Strings

```js
const DataMocker = require('@gabrielduumont/data-mocker-js');
// Instantiate the class
const dataMocker = new DataMocker();

// Get a random word
var word = dataMocker.strings.word();

// Get a random phrase
var phrase = dataMocker.strings.phrase();

// Get a random paragraph
var paragraph = dataMocker.strings.paragraph();

// Get a random text (multiple paragraphs)
var bigText = dataMocker.strings.bigText();

```

### Names

Names takes on a 'locale' parameter, which by now the only one default and available is 'BR'. A list of all available locales will be linked here (whenever we have more than just one)

```js
const DataMocker = require('@gabrielduumont/data-mocker-js');
// Instantiate the class
const dataMocker = new DataMocker();

// Get a random first name
var firstName = dataMocker.names.firstName();

// Get a random last name
var lastName = dataMocker.names.lastName();

// Get a random fullname
var fullname = dataMocker.names.fullname();

// Get a random city name
var cities = dataMocker.names.cities();

// Get a random brand name
var brand = dataMocker.names.brand();

// Get a random brand name (with locale example)
var usBrand = dataMocker.names.brand('US'); // not available at the moment, but will be in the future (hopefully with more contributors :)
var canadaBrand = dataMocker.names.brand('CA'); // not available at the moment, but will be in the future (hopefully with more contributors :)

```
### React examples

```js

import './App.css';
import DataMocker from '@gabrielduumont/data-mocker-js';

function App() {
  const dataMocker = new DataMocker();
  return (
    <div className="App">
        <p>int: {dataMocker.numbers.int()}</p>
        <p>bigInt: {dataMocker.numbers.bigInt()}</p>
        <p>hugeInt: {dataMocker.numbers.hugeInt()}</p>
        <p>smallInt: {dataMocker.numbers.smallInt()}</p>
        <p>decimal: {dataMocker.numbers.decimal()}</p>
        <p>bigDecimal: {dataMocker.numbers.bigDecimal()}</p>
        <p>hugeDecimal: {dataMocker.numbers.hugeDecimal()}</p>
        <p>smallDecimal: {dataMocker.numbers.smallDecimal()}</p>
        <p>smallestDecimal: {dataMocker.numbers.smallestDecimal()}</p>
        <p>word: {dataMocker.strings.word()}</p>
        <p>phrase: {dataMocker.strings.phrase()}</p>
        <p>paragraph: {dataMocker.strings.paragraph()}</p>
        <p>bigText: {dataMocker.strings.bigText()}</p>
    </div>
  );
}

export default App;

```

### Testing examples

```js
const DataMocker = require('@gabrielduumont/data-mocker-js');

const dataMocker = new DataMocker();

const testMethod = (
  methodName,
  min = 0,
  max = 1,
) => {
  const executions = dataMocker.numbers.bigInt();
  const result = [...Array(executions).keys()]
    .map(item => {
      const resultFromMethod = dataMocker.numbers[methodName]();
      return resultFromMethod >= min && resultFromMethod <= max;
    })
    .every(item => (!!item));
  console.log(`${methodName} (test runs: ${executions})`)
  if (result) {
    console.log(`--result: ok`)
  }
  else {
    console.log(`--result: error`)
  }
}

testMethod('bigInt', 1000, 100000);
testMethod('smallInt', 0, 10);
testMethod('hugeInt', 1000000, 100000000);
testMethod('int', 0, 100000000);
testMethod('bigDecimal', 1000, 100000);
testMethod('smallDecimal', 0, 10);
testMethod('smallestDecimal', 0, 1);
testMethod('hugeDecimal', 1000000, 100000000);
testMethod('decimal', 0, 100000000);


const moreExecutions = dataMocker.numbers.smallInt();
const result = [...Array(moreExecutions).keys()].forEach(item => {
  testMethod('bigInt', 1000, 100000);
})

```

## Credits

somewhat inspired on (RIP) fakerjs.

## License

[MIT](LICENSE)