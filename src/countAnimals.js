const data = require('../data/zoo_data');

function countAnimals(animal = data.species) {
  const animalsObj = {};

  animal.forEach((eachAnimal) => {
    const { name, residents } = eachAnimal;
    animalsObj[name] = residents.length;
  });

  return animalsObj;
}

module.exports = countAnimals;
