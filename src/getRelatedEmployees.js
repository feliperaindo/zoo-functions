const data = require('../data/zoo_data');

function isManager(id) {
  return data.employees.some((person) => person.managers.some((idNumber) => idNumber === id));
}

function createArray(managerId) {
  return data.employees.reduce((arrayMenagedPeople, person) => {
    const checkSubordinates = person.managers.some((id) => managerId === id);
    if (checkSubordinates) {
      arrayMenagedPeople.push(`${person.firstName} ${person.lastName}`);
    }
    return arrayMenagedPeople;
  }, []);
}

function getRelatedEmployees(managerId) {
  const checkMenager = isManager(managerId);
  if (checkMenager) {
    return createArray(managerId);
  }
  throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
}

module.exports = { isManager, getRelatedEmployees };
