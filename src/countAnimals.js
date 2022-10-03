// const ageFiltered = filterSexAndAge(specieFiltered, 'age', age);
// const sexFiltered = filterSexAndAge(ageFiltered, 'sex', sex);

// return animal.reduce((animalsObj, eachObj) => {
//   animalsObj[eachObj.name] = eachObj.residents.length;
//   return animalsObj;
// }, {});
// countAnimals({ specie: 'bears' });

const data = require('../data/zoo_data');

const { species } = data;

function undefinedParam() {
  const animalsObj = {};
  species.forEach((eachObj) => { animalsObj[eachObj.name] = eachObj.residents.length; });
  return animalsObj;
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
  if (animal === undefined) {
    return undefinedParam();
  }

  const { specie, sex } = animal;

  if (sex === undefined) {
    const objReturned = JSON.parse(undefinedSex(specie));
    return objReturned.residents.length;
  }
  return specieAndSexDefined(specie, sex);
}

module.exports = countAnimals;
