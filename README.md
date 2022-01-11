# @gabrielduumont/data-mocker-js
v.1.0.4
Mock data generator. 
Fast development and testing for front-end taks.

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

## Credits

somewhat inspired on (RIP) fakerjs.

## License

[MIT](LICENSE)