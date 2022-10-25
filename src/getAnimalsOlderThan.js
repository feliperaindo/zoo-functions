const { species } = require('../data/zoo_data');

const getAnimalsOlderThan = (animal, old) =>
  species.find(({ name }) => name === animal).residents.every(({ age }) => age >= old);

module.exports = getAnimalsOlderThan;
