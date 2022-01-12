const { getProperLocale } = require('./utils/locales');
const Numbers = require('./numbers');

const FIRST_NAMES = {
  BR: [
    'João', 'Gabriel', 'Maria Júlia', 'Gustavo', 'Kleversson',
    'Ana', 'Daniel', 'Pedro Henrique', 'Patrick', 'Tamiris',
  ],
};

const LAST_NAMES = {
  BR: [
    'Cardoso', 'Figueira', 'Oliveira Matos', 'Brum', 'Souza',
    'Lima e Silva', 'Amorim', 'Nascimento', 'Fonseca', 'Garcia',
  ],
};

const BRANDS = {
  BR: [
    'Itáu', 'Bradesco', 'Ambev', 'Natura', 'Banco do Brasil',
    'Petrobras', 'Magazine Luiza', 'Americanas', 'Renner', 'Ipiranga',
  ],
};

const CITIES = {
  BR: [
    'São Paulo', 'Rio de Janeiro', 'Brasília', 'Belo Horizonte', 'Manaus',
    'Porto Alegre', 'São Luís', 'Maceió', 'São Bernardo do Campo', 'Campos dos Goytacazes',
  ],
};

const firstName = (locale = 'BR') => {
  const properLocale = getProperLocale(locale);

  const randomFirstNamePosition = (new Numbers).smallInt();
  return `${FIRST_NAMES[properLocale][randomFirstNamePosition]}`;
}

const lastName = (locale = 'BR') => {
  const properLocale = getProperLocale(locale);
  const randomLastNamePosition = (new Numbers).smallInt();
  return `${LAST_NAMES[properLocale][randomLastNamePosition]}`;
}

const fullname = (locale = 'BR') => {
  const properLocale = getProperLocale(locale);
  return `${firstName(properLocale)} ${lastName(properLocale)}`;
}

const brand = (locale = 'BR') => {
  const properLocale = getProperLocale(locale);
  const randomPosition = (new Numbers).smallInt();
  return `${BRANDS[properLocale][randomPosition]}`;
}

const cities = (locale = 'BR') => {
  const properLocale = getProperLocale(locale);
  const randomPosition = (new Numbers).smallInt();
  return `${CITIES[properLocale][randomPosition]}`;
}

class DMNames {
  constructor() {
    this.lastName = lastName;
    this.firstName = firstName;
    this.fullname = fullname;
    this.brand = brand;
    this.cities = cities;
  }
}

module.exports = DMNames;