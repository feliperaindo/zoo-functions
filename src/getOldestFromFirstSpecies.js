const data = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  const colaborator = data.employees.find((person) => person.id === id);

  const responsableAnimal = data.species.find((animal) =>
    colaborator.responsibleFor.includes(animal.id));

  const getOlderAnimal = responsableAnimal.residents.reduce((animalOne, animalTwo) => {
    const test = (animalOne.age > animalTwo.age) ? animalOne : animalTwo;
    return test;
  });
  return [getOlderAnimal.name, getOlderAnimal.sex, getOlderAnimal.age];
}

module.exports = getOldestFromFirstSpecies;
