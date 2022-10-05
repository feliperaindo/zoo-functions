const data = require('../data/zoo_data');

const { employees, species } = data;

function getOldestFromFirstSpecies(id) {
  const colaborator = employees.find((person) => person.id === id);

  const responsableAnimal = species.find((animal) =>
    colaborator.responsibleFor.includes(animal.id));

  const getOlderAnimal = responsableAnimal.residents.reduce((animalOne, animalTwo) => {
    const test = (animalOne.age > animalTwo.age) ? animalOne : animalTwo;
    return test;
  });
  return Object.values(getOlderAnimal);
}

module.exports = getOldestFromFirstSpecies;
