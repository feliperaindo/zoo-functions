const data = require('../data/zoo_data');

const getAnimalsOlderThan = (animal, old) =>
  data.species.find(({ name }) => name === animal).residents
    .every(({ age }) => age >= old);

module.exports = getAnimalsOlderThan;
