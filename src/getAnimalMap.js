const data = require('../data/zoo_data');

const { species } = data;

const arrayCreator = (filter) => filter.reduce((array, animal) => [...array, animal.name], []);

const filterLocation = (location) => species.filter((animal) => animal.location === location);

const insertAnimalsInArray = (object, array) => {
  array.forEach((eachAnimalObject) => {
    const { residents, location, name } = eachAnimalObject;
    const newObj = { [name]: arrayCreator(residents) };
    object[location].push(newObj);
  });
  return object;
};

const includeNamesDefined = () => {
  const dataNames = { NE: [], NW: [], SE: [], SW: [] };
  Object.keys(dataNames).forEach((location) => {
    const animalsInLocation = filterLocation(location);
    insertAnimalsInArray(dataNames, animalsInLocation);
  });
  return dataNames;
};

const includeNamesUndefined = () => {
  const dataNames = { NE: [], NW: [], SE: [], SW: [] };
  Object.keys(dataNames).forEach((location) => {
    const animalsInLocation = filterLocation(location);
    const arrayAnimalsZoo = arrayCreator(animalsInLocation);
    dataNames[location] = [...arrayAnimalsZoo];
  });
  return dataNames;
};

function getAnimalMap(options) {
  if (!options) {
    return includeNamesUndefined();
  }
  const { includeNames } = options;

  if (!includeNames) {
    return includeNamesUndefined();
  }
  return includeNamesDefined();
}

module.exports = getAnimalMap;
