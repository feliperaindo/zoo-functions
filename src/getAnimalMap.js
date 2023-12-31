const { species } = require('../data/zoo_data');

const sortObject = (array) => array.sort();

const filterTool = (arrayToFilter, filter, key) =>
  arrayToFilter.filter((animal) => animal[key] === filter);

const arrayCreator = (filter, booleanSorted = false, sex = null) => {
  let maleFemaleFiltered = filter;

  if (sex) {
    maleFemaleFiltered = filterTool(filter, sex, 'sex');
  }

  const arrayAnimalNames = maleFemaleFiltered.reduce((array, { name }) =>
    [...array, name], []);

  return (booleanSorted) ? sortObject(arrayAnimalNames) : arrayAnimalNames;
};

const insertAnimalsInArray = (object, array, booleanSorted, sex) => {
  array.reduce((returnedNewObj, { residents, location, name }) => {
    const newObj = { [name]: arrayCreator(residents, booleanSorted, sex) };

    returnedNewObj[location].push(newObj);

    return returnedNewObj;
  }, object);
};

const returnConstructor = (booleanIncludeNames = false, booleanSorted, sex) => {
  const dataNames = { NE: [], NW: [], SE: [], SW: [] };

  Object.keys(dataNames).forEach((location) => {
    const animalsInLocation = filterTool(species, location, 'location');

    if (booleanIncludeNames) {
      insertAnimalsInArray(dataNames, animalsInLocation, booleanSorted, sex);
    } else { dataNames[location] = arrayCreator(animalsInLocation); }
  });
  return dataNames;
};

function getAnimalMap(options) {
  if (!options) {
    return returnConstructor();
  }
  const { includeNames, sorted, sex } = options;
  return returnConstructor(includeNames, sorted, sex);
}

module.exports = getAnimalMap;
