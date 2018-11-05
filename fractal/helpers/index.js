const equals = require('./equals');
const json = require('./json');

module.exports = () => require('@frctl/handlebars')({
  helpers: {
    ...equals,
    ...json
  }
});
