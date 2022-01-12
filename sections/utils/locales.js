const VALID_LOCALES = [
  'BR',
];

const isValidLocale = (locale) => VALID_LOCALES.includes(locale);

const getProperLocale = (locale) => (
  locale && isValidLocale(locale)
    ? locale
    : 'BR'
)

module.exports = {
  VALID_LOCALES,
  isValidLocale,
  getProperLocale,
};