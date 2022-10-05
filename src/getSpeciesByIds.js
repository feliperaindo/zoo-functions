const data = require('../data/zoo_data');

const getSpeciesByIds = (...ids) => data.species.filter((animalObj) =>
  ids.includes(animalObj.id));

module.exports = getSpeciesByIds;
