const data = require('../data/zoo_data');

const { species } = data;

function undefinedParam() {
  return species.reduce((animalsObj, eachObj) => {
    const { name, residents } = eachObj;
    return {
      ...animalsObj,
      [name]: residents.length,
    };
  }, {});
}

function undefinedSex(specie) {
  const getSpecieObj = species.find((animalObj) => animalObj.name === specie);
  return getSpecieObj.residents;
}

function specieAndSexDefined(specie, sex) {
  const getFilteredSpecie = undefinedSex(specie);
  return getFilteredSpecie.filter((condition) => condition.sex === sex).length;
}

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
