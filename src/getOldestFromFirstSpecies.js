const { employees, species } = require('../data/zoo_data');

function getOldestFromFirstSpecies(PersonId) {
  const { responsibleFor } = employees.find(({ id }) => id === PersonId);

  const { residents } = species.find(({ id }) =>
    responsibleFor.includes(id));

  const getOlderAnimal = residents.reduce((animalOne, animalTwo) =>
    ((animalOne.age > animalTwo.age) ? animalOne : animalTwo));
  return Object.values(getOlderAnimal);
}

module.exports = getOldestFromFirstSpecies;
