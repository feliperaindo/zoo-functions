const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  const getAnimals = ids.reduce((arrayAnimals, id) => {
    const checkId = data.species.find((animal) => animal.id === id);
    if (checkId !== undefined) {
      arrayAnimals.push(checkId);
    }
    return arrayAnimals;
  }, []);

  return getAnimals;
}

module.exports = getSpeciesByIds;
