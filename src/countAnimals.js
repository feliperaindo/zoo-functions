const { species } = require('../data/zoo_data');

const undefinedParam = () => species.reduce((animalsObj, eachObj) => {
  const { name, residents } = eachObj;
  return {
    ...animalsObj,
    [name]: residents.length,
  };
}, {});

const undefinedSex = (specie) =>
  species.find((animalObj) => animalObj.name === specie).residents;

const specieAndSexDefined = (specie, sex) => undefinedSex(specie)
  .filter((condition) => condition.sex === sex).length;

function countAnimals(animal) {
  if (!animal) {
    return undefinedParam();
  }

  const { specie, sex } = animal;

  if (!sex) {
    return undefinedSex(specie).length;
  }
  return specieAndSexDefined(specie, sex);
}

module.exports = countAnimals;
