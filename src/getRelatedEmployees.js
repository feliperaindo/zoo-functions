const data = require('../data/zoo_data');

const isManager = (id) => data.employees.some((person) =>
  person.managers.some((idNumber) => idNumber === id));

function createArray(managerId) {
  return data.employees.reduce((arrayMenagedPeople, person) => {
    if (person.managers.includes(managerId)) {
      arrayMenagedPeople.push(`${person.firstName} ${person.lastName}`);
    }
    return arrayMenagedPeople;
  }, []);
}

function getRelatedEmployees(managerId) {
  if (isManager(managerId)) {
    return createArray(managerId);
  }
  throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
}

module.exports = { isManager, getRelatedEmployees };
