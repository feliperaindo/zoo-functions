const { species } = require('../data/zoo_data');

const undefinedParam = () => species.reduce((animalsObj, { name, residents }) => ({
  ...animalsObj,
  [name]: residents.length,
}), {});

const undefinedSex = (specie) =>
  species.find(({ name }) => name === specie).residents;

const specieAndSexDefined = (specie, sex) => undefinedSex(specie)
  .filter(({ sex: animalSex }) => animalSex === sex).length;

function countAnimals(animal) {
  if (!animal) {
    return undefinedParam();
  }

  const { specie, sex } = animal;

  return (!sex) ? undefinedSex(specie).length : specieAndSexDefined(specie, sex);
}

module.exports = countAnimals;
