const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  if (ids.length === 0) {
    return [];
  }
  const getAnimals = [];

  ids.forEach((id) => {
    const checkId = data.species.find((animal) => animal.id === id);
    if (checkId !== undefined) {
      getAnimals.push(checkId.name);
    }
  });

  return getAnimals;
}

module.exports = getSpeciesByIds;
