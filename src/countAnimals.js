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
  return JSON.stringify(getSpecieObj);
}

function specieAndSexDefined(specie, sex) {
  const getFilteredSpecie = JSON.parse(undefinedSex(specie));
  const getFilteredSex = getFilteredSpecie.residents.filter((condition) => condition.sex === sex);
  return getFilteredSex.length;
}

function countAnimals(animal) {
  if (!animal) {
    return undefinedParam();
  }

  const { specie, sex } = animal;

  if (!sex) {
    const objReturned = JSON.parse(undefinedSex(specie));
    return objReturned.residents.length;
  }
  return specieAndSexDefined(specie, sex);
}

module.exports = countAnimals;
